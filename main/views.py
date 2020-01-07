from django.shortcuts import render

# Create your views here.
# Create your views here.


def render_react(request):
    # if request.user.is_anonymous:
    # return redirect(reverse('login') + '?next=' + request.get_full_path())
    return render(request, 'main/index.html')
