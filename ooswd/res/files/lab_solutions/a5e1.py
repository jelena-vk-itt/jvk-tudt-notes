cell_width = 6

def get_content(row, col):
    content = ""
    if row:
        content += "r" + str(row)
    if col:
        content += "c" + str(col)
    return content

def get_smiley_face(happy):
    return ":-" + (")" if happy else "(")

def write_table(col_count, row_count):
    print(get_smiley_face(True).center(cell_width), end="")
    print("|", end="")
    for col_num in range(1, col_count + 1):
        print(get_content(None, col_num).center(cell_width), end="")
    print("")

    print("-" * (cell_width * (col_count + 1) + 1))

    for row_num in range(1, row_count + 1):
        print(get_content(row_num, None).center(cell_width), end="")
        print("|", end="")
        for col_num in range(1, col_count + 1):
            print(get_content(row_num, col_num).center(cell_width), end="")
        print("")

if __name__ == "__main__":
    write_table(3, 3)
    print("")
    write_table(4, 4)