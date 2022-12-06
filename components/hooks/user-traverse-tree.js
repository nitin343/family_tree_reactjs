const useTraverseTree = () => {

    function insertNode(tree, folderId , item ,isFolder) {
       if(tree.id == folderId && tree.isFolder){
        Object.isExtensible(tree.items)
         tree.items.unshift({
            id: new Date().getTime(),
            name: item,
            isFolder,
            items: []
         })
         
         return tree;
       }

        let latestNode = [];
        latestNode = tree.items.map((obj) => {
            // Object.assign({}, item, {selected:false})
            return insertNode( obj , folderId , item , isFolder)
        })

        return {...tree , items: latestNode}
         
    }

    function deleteNode(tree , id , item , isFolder) {
        console.log('tree , id , item , isFolder' , tree , id , item , isFolder);
        let remove;
        if(tree.id == id && isFolder ){
            for (const key in tree) {
                delete tree[key];
            }
            console.log(tree, 'delete tree');
        }
    }

    console.log('insertNode insertNode  insertNode' , insertNode);
    return {insertNode , deleteNode}
}

export default useTraverseTree;