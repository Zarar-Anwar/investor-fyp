from django.shortcuts import render
from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view
from .serializers import user_data_serializer, user_serializer, login_serializer, IdeasSerializer, ContractSerializer, \
    contarctuser, SkillSerializer, TrackingSerializer, PfpSerializer
from django.contrib.auth.hashers import make_password
from rest_framework.response import Response
from django.contrib.auth.models import User, Group
from django.core.mail import send_mail
from django.conf import settings
from rest_framework import status
from django.contrib.auth import authenticate
from .models import user_data, ideas, skill, contract, ContractUser, tracking, pfp


# Create your views here.

@api_view(['POST'])
def signup(request):
    if request.method == 'POST':
        data = request.data
        print('**************************')
        print('**************************')
        print('**************************')
        print(data)
        print('**************************')
        print('**************************')
        print('**************************')

        user_data_serializer_instance = user_data_serializer(data=data)
        user_serializer_instance = user_serializer(data=data)

        if user_serializer_instance.is_valid():
            e_pass = make_password(data['password'])
            data['password'] = e_pass
            user_serializer_instance = user_serializer(data=data)
        else:
            return Response(
                {"errors": user_serializer_instance.errors, "message": "There's an error in username or password"},
                status=status.HTTP_400_BAD_REQUEST)

        if user_serializer_instance.is_valid() and user_data_serializer_instance.is_valid():
            user_instance = user_serializer_instance.save()
            user_id = User.objects.get(username=data['username'])
            data['user'] = user_id.id
            user_data_serializer_instance = user_data_serializer(data=data)

            if user_data_serializer_instance.is_valid():
                user_data_serializer_instance.save()
                group_name = None

                if data['category'] == 'investor':
                    group_name = 'investor'
                elif data['category'] == 'entrepreneur':
                    group_name = 'entrepreneur'
                elif data['category'] == 'skilled':
                    group_name = 'skilled'

                if group_name:
                    group = Group.objects.get(name=group_name)
                    group.user_set.add(user_instance)

                user_name = data['username']
                email_message = f"""\
                Welcome to BPC - Your Registration Was Successful
                 
                Dear {user_name},
                
                We are delighted to welcome you to BPC (Business Partnership Collaboration)!
                
                Thank you for choosing to join our platform. Your registration was successful, and we're excited to have you as part of our community.
                
                As a member of BPC, you now have access to a wide range of resources, networking opportunities, and professional development tools designed to help you thrive in your career.
                
                If you have any questions or need assistance, please don't hesitate to reach out to our support team at [support@email.com].
                
                Once again, welcome aboard!
                
                Best regards,
                BPC Team
                """
                send_mail('Welcome to BPC - Registration Successful', email_message, settings.DEFAULT_FROM_EMAIL,
                          [data['email']])

                return Response({"message": "User and user data saved successfully."}, status=status.HTTP_200_OK)
            else:
                return Response(
                    {"errors": user_data_serializer_instance.errors, "message": "There's an error with user details"},
                    status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response({"errors": user_serializer_instance.errors, "message": "There's an error with user data"},
                            status=status.HTTP_400_BAD_REQUEST)
    else:
        return Response({"message": "There is a method error"}, status=status.HTTP_405_METHOD_NOT_ALLOWED)


@api_view(['POST'])
def login(request):
    if request.method == 'POST':
        data = request.data
        print('**************************')
        print('**************************')
        print('**************************')
        print(data)
        print('**************************')
        print('**************************')
        print('**************************')
        login_data = login_serializer(data=data)

        if login_data.is_valid():
            username = login_data.validated_data['username']
            password = login_data.validated_data['password']
            user = authenticate(request, username=username, password=password)
            if username == 'admin' and password == 'admin':
                return Response({"username": username, "name": user.first_name, "category": "admin"},
                                status=status.HTTP_200_OK)
            if user is not None:
                user_detail = user_data.objects.get(user_id=user.id)
                user_Serializer = user_serializer(user)
                user_detail_serializer = user_data_serializer(user_detail)
                combined_data = user_Serializer.data
                combined_data.update(user_detail_serializer.data)

                return Response(combined_data)
            else:
                return Response({"message": "Authentication failed"})
        else:
            return Response({"message": "wrong credintials"})


@api_view(['Get', 'POST', 'PATCH', 'DELETE'])
def admin_control(request, id=None, category=None):
    if request.method == 'GET':
        group = Group.objects.get(name=category)
        group_data = User.objects.filter(groups=group).select_related('userdata')
        combined_data = []
        for user in group_data:
            user_serialized = user_serializer(user).data
            user_data_serialized = user_data_serializer(user.userdata).data
            user_combined = {**user_serialized, **user_data_serialized}
            combined_data.append(user_combined)
        return Response({"data": combined_data})


    elif request.method == 'PATCH':
        data = request.data
        record = User.objects.get(id=id)
        detail_record = user_data.objects.get(user_id=id)
        user_detail_data = user_data_serializer(instance=detail_record, data=data, partial=True)
        userr_data = user_serializer(instance=record, data=data, partial=True)
        if user_detail_data.is_valid() and userr_data.is_valid():
            user_detail_data.save()
            userr_data.save()
            return Response({"mesaage": "saved "})
        else:
            return Response({"mesaage": "error "})


    elif request.method == 'DELETE':
        if id is not None:
            record = User.objects.get(id=id)
            record.delete()
            return Response({"mesaage": "deleted "})
        else:
            return Response({"mesaage": "error "})


@api_view(['GET', 'POST', 'PATCH'])
def idea(request, id=None):
    if request.method == 'GET':
        if id is not None:
            uploaded_ideas = ideas.objects.filter(user_id=id)
            serialized_data_ideas = IdeasSerializer(uploaded_ideas, many=True)
            return Response(serialized_data_ideas.data, status=status.HTTP_200_OK)
        else:
            uploaded_ideas = ideas.objects.all()
            serialized_data_ideas = IdeasSerializer(uploaded_ideas, many=True)
            return Response(serialized_data_ideas.data, status=status.HTTP_200_OK)

    if request.method == 'POST':
        data = request.data
        print('**************************')
        print('**************************')

        print('**************************')
        print(data)
        print('**************************')
        print('**************************')
        print('**************************')
        data['user'] = id
        idea_data = IdeasSerializer(data=data)
        if idea_data.is_valid():
            idea_data.save()
            return Response(idea_data.data, status=status.HTTP_200_OK)
        else:
            return Response(idea_data.errors, status=status.HTTP_400_BAD_REQUEST)

    if request.method == 'PATCH':
        update_idea = ideas.objects.get(id=id)
        data = request.data.copy()
        serialized_data = IdeasSerializer(instance=update_idea, data=data, partial=True)
        if serialized_data.is_valid():
            serialized_data.save()
            return Response(serialized_data.data, status=status.HTTP_200_OK)
        else:
            return Response(serialized_data.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def delete_idea_by_id(request, id):
    try:
        idea = ideas.objects.get(id=id)
        idea.delete()
        return Response({"message": "Idea deleted successfully"}, status=status.HTTP_200_OK)
    except User.DoesNotExist:
        return Response({"error": "Idea not found"}, status=status.HTTP_404_NOT_FOUND)


@api_view(['GET'])
def single_idea(request, id):
    if request.method == 'GET':
        idea = ideas.objects.get(id=id)
        serialized = IdeasSerializer(idea)
        return Response(serialized.data, status=status.HTTP_200_OK)
    else:
        return Response(serialized.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def get_user_by_id(request, id):
    if request.method == 'GET':
        user = User.objects.get(id=id)
        serialized = user_serializer(user)
        combined_data = serialized.data
        user_detail = user_data.objects.get(user_id=user.id)
        detail_serializer = user_data_serializer(user_detail)
        combined_data.update(detail_serializer.data)

        return Response(combined_data, status=status.HTTP_200_OK)
    else:
        return Response(status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def get_all_users_enterprenuer(request):
    if request.method == 'GET':
        users = User.objects.filter(userdata__category='entrepreneur')
        serialized_users = user_serializer(users, many=True)

        combined_data = []
        for user, serialized_user in zip(users, serialized_users.data):
            try:
                user_detail = user_data.objects.get(user=user)
                detail_serializer = user_data_serializer(user_detail)
                combined_user_data = serialized_user
                combined_user_data.update(detail_serializer.data)
                combined_data.append(combined_user_data)
            except user_data.DoesNotExist:
                # Handle case where user_data does not exist for the user
                combined_data.append(serialized_user)

        return Response(combined_data, status=status.HTTP_200_OK)
    else:
        return Response(status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def get_all_users_investor(request):
    if request.method == 'GET':
        users = User.objects.filter(userdata__category='investor')
        serialized_users = user_serializer(users, many=True)

        combined_data = []
        for user, serialized_user in zip(users, serialized_users.data):
            try:
                user_detail = user_data.objects.get(user=user)
                detail_serializer = user_data_serializer(user_detail)
                combined_user_data = serialized_user
                combined_user_data.update(detail_serializer.data)
                combined_data.append(combined_user_data)
            except user_data.DoesNotExist:
                # Handle case where user_data does not exist for the user
                combined_data.append(serialized_user)

        return Response(combined_data, status=status.HTTP_200_OK)
    else:
        return Response(status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def delete_user_by_id(request, id):
    try:
        user = User.objects.get(id=id)
        user.delete()
        return Response({"message": "User deleted successfully"}, status=status.HTTP_200_OK)
    except User.DoesNotExist:
        return Response({"error": "User not found"}, status=status.HTTP_404_NOT_FOUND)


@api_view(['GET'])
def get_all_users_skilled_person(request):
    if request.method == 'GET':
        users = User.objects.filter(userdata__category='skilled')
        serialized_users = user_serializer(users, many=True)

        combined_data = []
        for user, serialized_user in zip(users, serialized_users.data):
            try:
                user_detail = user_data.objects.get(user=user)
                detail_serializer = user_data_serializer(user_detail)
                combined_user_data = serialized_user
                combined_user_data.update(detail_serializer.data)
                combined_data.append(combined_user_data)
            except user_data.DoesNotExist:
                # Handle case where user_data does not exist for the user
                combined_data.append(serialized_user)

        return Response(combined_data, status=status.HTTP_200_OK)
    else:
        return Response(status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def get_user_skilled(request):
    if request.method == 'GET':
        skilled_user = skill.objects.all()
        serializer = SkillSerializer(skilled_user, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['GET'])
def get_all_contracts(request):
    if request.method == 'GET':
        all_contract = contract.objects.all()
        serializer = ContractSerializer(all_contract, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['GET', 'POST', 'PATCH'])
def skills(request, id=None):
    if request.method == 'GET':
        if id is not None:
            uploaded_gig = skill.objects.filter(user_id=id)
            serialized_data_gig = SkillSerializer(uploaded_gig, many=True)
            return Response(serialized_data_gig.data, status=status.HTTP_200_OK)
        else:
            uploaded_gig = skill.objects.all()
            serialized_data_gig = SkillSerializer(uploaded_gig, many=True)
            return Response(serialized_data_gig.data, status=status.HTTP_200_OK)

    if request.method == 'POST':
        data = request.data
        data['user'] = id
        print('**************************')
        print('**************************')
        print('**************************')
        print(data)
        print('**************************')
        print('**************************')
        print('**************************')
        gig_data = SkillSerializer(data=data)
        if gig_data.is_valid():
            gig_data.save()
            return Response(gig_data.data, status=status.HTTP_200_OK)
        else:
            return Response(gig_data.errors, status=status.HTTP_400_BAD_REQUEST)

    if request.method == 'PATCH':

        update_gig = skill.objects.get(id=id)
        data = request.data.copy()
        serialized_data = SkillSerializer(instance=update_gig, data=data, partial=True)
        if serialized_data.is_valid():
            serialized_data.save()
            return Response(serialized_data.data, status=status.HTTP_200_OK)
        else:
            return Response(serialized_data.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def single_gig(request, id):
    if request.method == 'GET':
        gig = skill.objects.get(id=id)
        serialized = SkillSerializer(gig)
        return Response(serialized.data, status=status.HTTP_200_OK)
    else:
        return Response(serialized.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def delete_gig_by_id(request, id):
    try:
        gig = skill.objects.get(id=id)
        gig.delete()
        return Response({"message": "Gig deleted successfully"}, status=status.HTTP_200_OK)
    except User.DoesNotExist:
        return Response({"error": "Gig not found"}, status=status.HTTP_404_NOT_FOUND)


@api_view(['POST'])
def post_contract(request):
    if request.method == 'POST':
        data = request.data.copy()
        print('**************************')
        print('**************************')
        print('**************************')
        print(data)
        print('**************************')
        print('**************************')
        print('**************************')

        contract_serializer = ContractSerializer(data=data)

        if contract_serializer.is_valid():
            contract_instance = contract_serializer.save()

            # Now, handle the ContractUser data
            contract_user_data = {
                'contract': contract_instance.id,
                'investor': data.get('investor'),
                'entrepreneur': data.get('entrepreneur')
            }

            print('**************************')
            print('**************************')
            print('**************************')
            print(contract_user_data)
            print('**************************')
            print('**************************')
            print('**************************')
            contract_user_serializer = contarctuser(data=contract_user_data)
            if contract_user_serializer.is_valid():
                contract_user_serializer.save()
                return Response(contract_serializer.data, status=status.HTTP_200_OK)
            else:
                contract_instance.delete()  # Clean up the created contract if ContractUser fails
                return Response(contract_user_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        return Response(contract_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def inv_done_contracts(request, id=None):
    if request.method == 'GET':
        if id is not None:
            try:
                contract_users = ContractUser.objects.filter(investor_id=id)
                contracts = [cu.contract for cu in contract_users]
                ideas_list = [c.idea for c in contracts]

                serialized_contracts = ContractSerializer(contracts, many=True)
                serialized_ideas = IdeasSerializer(ideas_list, many=True)

                response_data = {
                    'contracts': serialized_contracts.data,
                    'ideas': serialized_ideas.data
                }

                return Response(response_data, status=status.HTTP_200_OK)
            except User.DoesNotExist:
                return Response({'error': 'User not found'}, status=status.HTTP_404_NOT_FOUND)
            except Exception as e:
                return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)
        elif id is None:
            try:
                contract_users = ContractUser.objects.all()
                contracts = [cu.contract for cu in contract_users]
                ideas_list = [c.idea for c in contracts]

                serialized_contracts = ContractSerializer(contracts, many=True)
                serialized_ideas = IdeasSerializer(ideas_list, many=True)

                response_data = {
                    'contracts': serialized_contracts.data,
                    'ideas': serialized_ideas.data
                }

                return Response(response_data, status=status.HTTP_200_OK)
            except User.DoesNotExist:
                return Response({'error': 'User not found'}, status=status.HTTP_404_NOT_FOUND)
            except Exception as e:
                return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def ent_done_contracts(request, id=None):
    if request.method == 'GET':
        if id is not None:
            try:
                contract_users = ContractUser.objects.filter(entrepreneur_id=id)
                contracts = [cu.contract for cu in contract_users]
                ideas_list = [c.idea for c in contracts]

                serialized_contracts = ContractSerializer(contracts, many=True)
                serialized_ideas = IdeasSerializer(ideas_list, many=True)

                response_data = {
                    'contracts': serialized_contracts.data,
                    'ideas': serialized_ideas.data
                }

                return Response(response_data, status=status.HTTP_200_OK)
            except User.DoesNotExist:
                return Response({'error': 'User not found'}, status=status.HTTP_404_NOT_FOUND)
            except Exception as e:
                return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)
        elif id is None:
            try:
                contract_users = ContractUser.objects.all()
                contracts = [cu.contract for cu in contract_users]
                ideas_list = [c.idea for c in contracts]

                serialized_contracts = ContractSerializer(contracts, many=True)
                serialized_ideas = IdeasSerializer(ideas_list, many=True)

                response_data = {
                    'contracts': serialized_contracts.data,
                    'ideas': serialized_ideas.data
                }

                return Response(response_data, status=status.HTTP_200_OK)
            except User.DoesNotExist:
                return Response({'error': 'User not found'}, status=status.HTTP_404_NOT_FOUND)
            except Exception as e:
                return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'POST'])
def tracking_record(request, id=None):
    if request.method == 'GET':
        records = tracking.objects.filter(contract=id)
        serialized = TrackingSerializer(records, many=True)
        return Response(serialized.data, status=status.HTTP_200_OK)

    if request.method == 'POST':
        data = request.data.copy()
        print('**************************')
        print('**************************')
        print('**************************')
        print(data)
        print('**************************')
        print('**************************')
        print('**************************')
        serialized = TrackingSerializer(data=data)
        if serialized.is_valid():
            serialized.save()
            return Response(serialized.data, status=status.HTTP_200_OK)
        else:
            return Response(serialized.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def record_count(request, id=None, category=None):
    if request.method == 'GET':
        response_data = {}

        if category == 'investor':
            contract_users = ContractUser.objects.filter(investor_id=id).order_by('-id')[:2]
            contracts = [cu.contract for cu in contract_users]
            ideas_list = [c.idea for c in contracts]

            serialized_contracts = ContractSerializer(contracts, many=True)
            serialized_ideas = IdeasSerializer(ideas_list, many=True)

            response_data = {
                'contracts': serialized_contracts.data,
                'ideas': serialized_ideas.data
            }

        elif category == 'entrepreneur':
            contract_users = ContractUser.objects.filter(entrepreneur_id=id).order_by('-id')[:2]
            contracts = [cu.contract for cu in contract_users]
            ideas_list = [c.idea for c in contracts]

            total_ideas = ideas.objects.filter(user_id=id).count()
            total_contracts = ContractUser.objects.filter(entrepreneur_id=id).count()

            serialized_contracts = ContractSerializer(contracts, many=True)
            serialized_ideas = IdeasSerializer(ideas_list, many=True)

            response_data = {
                'contracts': serialized_contracts.data,
                'ideas': serialized_ideas.data,
                'total_ideas': total_ideas,
                'total_contracts': total_contracts
            }

        elif category == 'skilled':
            total_skills = skill.objects.filter(user_id=id).count()
            response_data = {
                'total_skills': total_skills
            }

        elif category == 'admin':
            total_contracts = contract.objects.count()
            ideas_list = ideas.objects.filter(contract__isnull=False)

            serialized_ideas = IdeasSerializer(ideas_list, many=True)

            response_data = {
                'total_contracts': total_contracts,
                'ideas': serialized_ideas.data
            }

        else:
            return Response({'error': 'Invalid category'}, status=status.HTTP_400_BAD_REQUEST)

        return Response(response_data, status=status.HTTP_200_OK)


@api_view(['GET', 'POST'])
def profile_pfp(request, id=None):
    if request.method == 'GET':
        try:
            get_pfp = pfp.objects.get(user_id=id)
            serialized = PfpSerializer(get_pfp)
            return Response(serialized.data, status=status.HTTP_200_OK)
        except pfp.DoesNotExist:
            return Response({'message': 'Profile picture not found'}, status=status.HTTP_200_OK)
    elif request.method == 'POST':
        data = request.data.copy()
        try:
            profile_picture = pfp.objects.get(user_id=id)
            serialized = PfpSerializer(profile_picture, data=data)
        except pfp.DoesNotExist:
            serialized = PfpSerializer(data=data)

        if serialized.is_valid():
            serialized.save()
            return Response(serialized.data, status=status.HTTP_200_OK)
        else:
            return Response(serialized.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['DELETE'])
def record_delete(request, id=None, record=None):
    if request.method == 'DELETE':
        if record == 'user':
            instance = get_object_or_404(User, id=id)
        elif record == 'user_data':
            instance = get_object_or_404(user_data, id=id)
        elif record == 'idea':
            instance = get_object_or_404(ideas, id=id)
        elif record == 'skill':
            instance = get_object_or_404(skill, id=id)
        elif record == 'contract':
            instance = get_object_or_404(contract, id=id)
        elif record == 'contract_user':
            instance = get_object_or_404(ContractUser, id=id)
        elif record == 'tracking':
            instance = get_object_or_404(tracking, id=id)
        elif record == 'pfp':
            instance = get_object_or_404(pfp, id=id)
        else:
            return Response({'error': 'Invalid record type'}, status=status.HTTP_400_BAD_REQUEST)

        instance.delete()
        return Response({'message': f'{record} record deleted successfully'}, status=status.HTTP_204_NO_CONTENT)

    return Response({'error': 'Invalid request method'}, status=status.HTTP_405_METHOD_NOT_ALLOWED)
