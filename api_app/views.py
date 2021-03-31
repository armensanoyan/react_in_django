from django.shortcuts import render, HttpResponse
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def Api(request):
    print(request.method)
    with open('file.wav', 'wb') as w:
        w.write(request.body)
    return HttpResponse('<h1>hello world!</h1>')
