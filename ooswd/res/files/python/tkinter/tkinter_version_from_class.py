import tkinter as tk

def do_something_function():
    msg.configure(text="Button clicked!")

def display_entry_in_msg():
    content = entryTextVar.get()
    entryTextVar.set('Enter new text!')
    msg.configure(text=content)

def list_clicked():
    list_of_checked = []
    for i, cb in enumerate(cbList):
        if bvList[i].get():
            list_of_checked.append(cb['text'])
    msg.configure(text=', '.join(list_of_checked))


msg_store = ''
def enter_function(event):
    global msg_store
    msg_store = msg['text']
    msg['text'] = 'Mouse here!'

def leave_function(event):
    msg['text'] = msg_store


root = tk.Tk()
root.title("First GUI")
root.resizable(False, False)
#root.geometry("300x200")

label = tk.Label(root, text="Good evening!")
label.grid(row=0, column=0)

label['text'] = 'Good night!'
label.configure(text='Good morning!', anchor='w')

txtVar = tk.StringVar(value='Hello!')
label['textvariable'] = txtVar
txtVar.set('Goodbye!')


# add the frame widget
frame = tk.Frame(root, bg='pink')
frame.grid(row=1, column=0, padx=10, pady=10)

# add other widgets inside the frame
entryTextVar = tk.StringVar(value='Type here')
entry = tk.Entry(frame, textvariable=entryTextVar)
entry.grid(row=1, column=0, padx=(10, 0), pady=(5, 0))

cbList = []
bvList = []
for name in ['red', 'green', 'blue']:
    bvList.append(tk.BooleanVar(value=False))
    cbList.append(tk.Checkbutton(frame, text=name, variable=bvList[-1], bg='pink', bd=0))
    cbList[-1].grid(row=len(cbList)+1, column=0, padx=5, pady=5, sticky='w')

button = tk.Button(frame, text="Transfer entry", command=display_entry_in_msg)
button.grid(row=3, column=1, sticky='e', padx=10)

button = tk.Button(frame, text="List clicked", command=list_clicked)
button.grid(row=4, column=1, sticky='e', padx=10)

msg = tk.Message(frame, text="Initial message", bg='lightblue', width=500, anchor='w')
msg.grid(row=5, column=0, columnspan=2, sticky='we', padx=10, pady=(20, 10))

# having defined the functions, we can bind them to events
msg.bind('<Enter>', enter_function)
msg.bind('<Leave>', leave_function)	

root.mainloop()	