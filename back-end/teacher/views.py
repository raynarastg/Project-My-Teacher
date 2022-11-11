from rest_framework.status import HTTP_200_OK
from rest_framework.views import APIView, Response

from teacher.models import Professor
from teacher.serializers import ProfessorSerializer


class ProfessorAPIView(APIView):
  def get(self, request, format=None):
    professores = Professor.objects.all()
    serializer = ProfessorSerializer(professores, many=True)
    return Response(serializer.data, status=HTTP_200_OK)
