// This kata uses Linked Lists and recursion

//ceate a function stringify which accepts an argument list and returns a string representation of the list. The string representation of the list starts with the value of the current Node, specified by its data property, followed by a whitespace character, an arrow and another whitespace character (" -> "), followed by the rest of the list. The end of the string representation of a list must always end with null For example, given the following list:

// new Node(1, new Node(2, new Node(3)))

// "1 -> 2 -> 3 -> null"

const stringify = (list) => {
    return list === null ? "null" : `${list.data} -> ${stringify(list.next)}`
}

// return list when is identical to null, which means is the last item of the list, if its not the last item of the list we need to show the current node with he's specified data, than we need to show the rest of the list, which is calling itself the function and his next list item.

// SECOND SOLUTION

function stringify(list) {
    let data = [];
    while (list !== null) {
        data.push(list.data);
        list = list.next;
    }
    data.push('null');
    return data.join(' -> ');
}

// create a variable with an empty array, while the current node is not null, which means that while he's not the last item of the list, we use push method to put this current item to be the last and then list turns in to the next list item, when is not !== null anymore we push "null" to the last item of the list