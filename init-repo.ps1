$git = "c:\Users\GANESH\.android\mingit\cmd\git.exe"

& $git init
& $git config user.name "Ganesh Reddy"
& $git config user.email "nandakishore3258@gmail.com"
& $git branch -M main
& $git remote remove origin 2>$null
& $git remote add origin "https://github.com/nandakishore3258-cell/wedding-invitation.git"
& $git add .
& $git commit -m "Wedding Invitation - Chi. Ganesh Reddy & Chi. Sou. Anusha Reddy"
& $git log -n 1
