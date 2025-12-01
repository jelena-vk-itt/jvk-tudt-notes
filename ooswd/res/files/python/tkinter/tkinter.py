import tkinter as tk

def do_something_function():
    msg.configure(text="Button clicked!")

def read_and_display_text():
    new_message_text = entry.get()
    if boolVar.get():
        new_message_text = new_message_text.upper()
    msg.configure(text=new_message_text)

msg_store = ''
def enter_function(event):
    global msg_store
    msg_store = msg['text']
    msg['text'] = 'Mouse here!'

def leave_function(event):
    msg['text'] = msg_store

# create a Tk root object
root = tk.Tk()
root.title("First GUI")
#root.geometry("300x200")
root.resizable(False, False)

label = tk.Label(root, text="Good evening!", anchor='w')
label.grid(row=0, column=0)

label['text'] = 'Good night!'
label.configure(text='Good morning!')

txtVar = tk.StringVar()
txtVar.set('Hello!')
label['textvariable'] = txtVar
txtVar.set('Goodbye!')

frame = tk.Frame(root, bg='pink')
frame.grid(row=1, column=0)

entry = tk.Entry(frame)
entry.grid(row=1, column=0, padx=10, pady=10)

boolVar = tk.BooleanVar(value=False)
checkbox = tk.Checkbutton(frame, text="capitalise", variable=boolVar, bg='yellow')
checkbox.grid(row=1, column=1, padx=10, pady=10)

button = tk.Button(frame, text="Click here", command=read_and_display_text)
button.grid(row=2, column=1, sticky='e', padx=10)

msg = tk.Message(frame, text="Initial message", bg='lightblue', width=500, anchor='w')
msg.grid(row=3, column=0, columnspan=2, sticky='we', padx=10, pady=(20, 10))
msg.bind('<Enter>', enter_function)
msg.bind('<Leave>', leave_function)

# show the object
root.mainloop()	

