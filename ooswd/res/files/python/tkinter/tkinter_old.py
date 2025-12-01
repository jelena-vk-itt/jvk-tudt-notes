from tkinter import *
from tkinter import ttk

from tkinter import *
from tkinter import ttk

def on_stop():
   global running
   running = False

def show_text():
    message["text"] = "Call " + phone.get()


root = Tk()

content = ttk.Frame(root)
frame = ttk.Frame(content, borderwidth=5, relief="ridge", width=200, height=100)
namelbl = ttk.Label(content, text="Name")
name = ttk.Entry(content)

onevar = BooleanVar(value=True)
twovar = BooleanVar(value=False)
threevar = BooleanVar(value=True)

one = ttk.Checkbutton(content, text="One", variable=onevar, onvalue=True)
two = ttk.Checkbutton(content, text="Two", variable=twovar, onvalue=True)
three = ttk.Checkbutton(content, text="Three", variable=threevar, onvalue=True)
ok = ttk.Button(content, text="Okay", command=show_text)
cancel = ttk.Button(content, text="Cancel", command=root.destroy)

content.grid(column=0, row=0, sticky=(N, W, E, S))
frame.grid(column=0, row=0, columnspan=3, rowspan=2, sticky=(N, W, E, S))
namelbl.grid(column=3, row=0, columnspan=2, sticky=(S))
name.grid(column=3, row=1, columnspan=2, sticky=(N))
one.grid(column=0, row=3)
two.grid(column=1, row=3)
three.grid(column=2, row=3)
ok.grid(column=3, row=3)
cancel.grid(column=4, row=3)


root.columnconfigure(0, weight=1)
root.rowconfigure(0, weight=1)
content.columnconfigure(0, weight=1)
content.columnconfigure(1, weight=1)
content.columnconfigure(2, weight=1)
content.rowconfigure(0, weight=1)
content.rowconfigure(1, weight=1)

phone = StringVar()
home = ttk.Radiobutton(frame, text='Home', variable=phone, value='home')
office = ttk.Radiobutton(frame, text='Office', variable=phone, value='office')
cell = ttk.Radiobutton(frame, text='Mobile', variable=phone, value='cell')
message = ttk.Label(frame, text=" ")
home.grid(column=0, row=0, sticky=(W))
office.grid(column=0, row=1, sticky=(W))
cell.grid(column=0, row=2, sticky=(W))
message.grid(column=0, row=3, sticky=(W))

def print_hierarchy(w, depth=0):
    print('  '*depth + w.winfo_class() + ' w=' + str(w.winfo_width()) + ' h=' + str(w.winfo_height()) + ' x=' + str(w.winfo_x()) + ' y=' + str(w.winfo_y()))
    for i in w.winfo_children():
        print_hierarchy(i, depth+1)

print_hierarchy(root)

root.mainloop()