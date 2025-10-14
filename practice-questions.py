# These are questions i failed on the Mock GCF; Sun Oct 12 2025

# Problem: Find all the words that start and end with the same letter (case-insensitive). Return how many there are.
def wordFilter(text):
    # using split() → turns the sentence into a list of words
    clean_text = text.split()
    count = 0

    for word in clean_text:
        allSmall = word.lower()
        if allSmall[0] == allSmall[-1]:
            count = count + 1
        # debug: check lowercase + first letter
        # print(allSmall, "--",allSmall[0])
    return count

text = "Level dEmanND noNe"
print(wordFilter(text)) # Solution: 2
# Step 1: Split text into words
# Step 2: Make everything lowercase
# Step 3: Compare first and last letters
# WHY I MESSED UP? ---------------------------> I didnt know that i can still access the first and last elements using numbers

# Problem: