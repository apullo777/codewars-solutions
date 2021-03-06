# Complete the function/method (depending on the language) 
# to return true/True when its argument is an array that 
# has the same nesting structures and same corresponding 
# length of nested arrays as the first array.

# should return True
# same_structure_as([ 1, 1, 1 ], [ 2, 2, 2 ] )
# same_structure_as([ 1, [ 1, 1 ] ], [ 2, [ 2, 2 ] ] )

# should return False 
# same_structure_as([ 1, [ 1, 1 ] ], [ [ 2, 2 ], 2 ] )
# same_structure_as([ 1, [ 1, 1 ] ], [ [ 2 ], 2 ] )

# should return True
# same_structure_as([ [ [ ], [ ] ] ], [ [ [ ], [ ] ] ] )

# should return False
# same_structure_as([ [ [ ], [ ] ] ], [ [ 1, 1 ] ] )

def same_structure_as(original, other):
    if type(original) != type(other) or len(original) != len(other):
        return False
    for org_val, other_val in zip(original, other):
        if (isinstance(org_val, list) or isinstance(other_val, list)) and type(org_val) != type(other_val):
            return False
        if type(org_val) is list and type(other_val) is list:
            if not same_structure_as(org_val, other_val):
                return False
    return True