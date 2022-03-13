
# Check whether the elements in b are the elements in a squared, regardless of the order
def comp(array1, array2):
    try:
        return sorted([i**2 for i in array1]) == sorted(array2)
    except:
        return False 