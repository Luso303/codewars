# This function should return an object, but it's not doing what's intended. What's wrong?
# debugging

# def mystery():
#     results = {
#     'sanity': 'Hello'}
#     return
#     results

def mystery():
  results = {'sanity': 'Hello'}
  return results;

# short form
def mystery():
    return {'sanity': 'Hello'}