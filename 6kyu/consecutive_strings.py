"""
6 kyu: Consecutive strings
http://www.codewars.com/kata/consecutive-strings/train/python
You are given an array strarr of strings and an integer k.
Your task is to return the first longest string consisting of k consecutive strings taken in the array.
#Example: longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"
n being the length of the string array, if n = 0 or k > n or k <= 0 return "".
"""

def longest_consec(strarr, k):
    if (len(strarr) == 0 or k <= 0) or len(strarr) <k:
        return ""
    sorted = ["".join(strarr[i:i+k]) for i in range(len(strarr))]
    return max(sorted, key = lambda x: len(x))
    
    