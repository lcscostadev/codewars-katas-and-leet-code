// Implement a GetNth() function that takes a linked list and an integer index and returns the node stored at the Nth index position. GetNth() uses the C numbering convention that the first node is index 0, the second is index 1, ... and so on.

// The index should be in the range [0..length-1]. If it is not, or if the list is empty, GetNth() should throw/raise an exception

function Node(data) {
    this.data = data;
    this.next = null;
}

function getNth(node, index) {
    if (!node) {
        throw new Error(`Invalid node at ${index}`);
    }

    return (index === 0) ? node : getNth(node.next, index - 1);
}