

from cgi import test


x = [10, 20, 30, 40, 50, 60, 70]
y = []
for i, j in enumerate(x):
    if i & 1:
        y.append(x[i])
print(y)


print(y)

# keep extracting elements from in origianal list at odd positions until all elements are contained in created list  
def extract_odd_indexed_elements(original_list):
    created_list = []
    while original_list:
        for count, i in enumerate(original_list):
            # using bitwise operator to find odd positions
            if not count & 1:
                created_list.append(original_list[count])
        return created_list


test = [1, 2, 3, 4, 5, 6]
print(extract_odd_indexed_elements(test))
