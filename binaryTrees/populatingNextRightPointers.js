//You are given a perfect binary tree where all leaves are on the same level, 
//and every parent has two children. The binary tree has the following definition:

// struct Node {
//   int val;
//   Node *left;
//   Node *right;
//   Node *next;
// }
//Populate each next pointer to point to its next right node. 
//If there is no next right node, the next pointer should be set to NULL.

//Initially, all next pointers are set to NULL.

var connect = function(root) {
    // https://medium.com/geekculture/leetcode-populating-next-right-pointers-in-each-node-740457935fe2
    //     let queue = [];
    
    //     if(root)
    //         queue.push(root);
    
    //     while(queue.length > 0) {
    //         tmp = [];
    //         let len = queue.length;
    
    //         for (let i = 0; i < len; i++) {
    //             let node = queue.shift();
    //             tmp.push(node.val);
    
    //             if(node.left) {
    //                 queue.push(node.left);
    //             }
    
    //             if(node.right) {
    //                 queue.push(node.right);
    //             }
    
    
    //             if( i < len - 1 ) {
    //                node.next = queue[0];
    //             }
    //         }
    //     }
    
    //     return root;

    // https://beizhedenglong.github.io/leetcode-solutions/docs/populating-next-right-pointers-in-each-node
        let frontier = [root]
      while (frontier.length) {
        const next = []
        frontier.forEach((node) => {
          if (node && node.left) {
            node.left.next = node.right
            const last = next[next.length - 1]
            if (last) {
              last.next = node.left
            }
            next.push(node.left, node.right)
          }
        })
        frontier = next
      }
      return root
    };