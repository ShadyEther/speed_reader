import os
import time

f=open("file.txt","r")
word_list=f.read().split()
print(f.read())
wpm=int(input("Enter words per minute: "))
time_ =(60/wpm)

for i in range(len(word_list)):
    os.system('cls')
    print(word_list[i])
    time.sleep(time_)


