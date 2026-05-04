Dynamic nested routing

![Dynamic nested routing](image.png)


we use params to access the id's of the nested routing
const {userId, postId} =await params;


----------------------------------

Route group

It is use for organization purpose only and will not effect url
Benefits:-
Clean url
Modular layout
Improve maintainabity

![Route group](image-1.png)

layout.jsx:- in out most of the code we write goes here so that it can be reused by other components or pages as well.

------------------------------------

Private folder
Folder prefixed state with underscore ( like _components, _utils, _lib, etc) will not be visible to user but will only be used for internal purpose and hence should not be exposed to the public.


