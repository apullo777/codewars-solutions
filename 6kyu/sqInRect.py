# The drawing below gives an idea of how to cut a given "true" rectangle into squares 
# ("true" rectangle meaning that the two dimensions are different).

# Can you translate this drawing into an algorithm?
#You will be given two dimensions
# a positive integer length
# a positive integer width

# You will return a collection or a string 

# sqInRect(5, 3) should return [3, 2, 1, 1]
# sqInRect(3, 5) should return [3, 2, 1, 1]

def sqInRect(lng, wdth):
    # your code
    if lng == wdth:
        return None
    if lng < wdth:
        wdth, lng = lng, wdth

    list = []
    while lng != wdth:
        list.append(wdth)
        lng = lng - wdth
        if lng < wdth:
            wdth, lng = lng, wdth
    list.append(wdth)
    return list