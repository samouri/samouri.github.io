
# Interview Prep

The point of this file (and repo) is to help me keep track of what I'm studying
while prepping for software engineering interviews.

## About Me Questions

#### Why I left past companies

**Why did I leave Automattic?**

Automattic was perfect in a lot of ways. I got to work on interesting problems, with interesting people, travel all over the world, and participate in the larger open source community.

The driving reason for why I left is the company's fully distributed nature.
After working remote for a couple of years, I just started missing people.
Going to coworking offices isn't really my cup of tea
I have a feeling that maybe at a different stage of life I'd enjoy it more.

There were a few other issues that weren't as much of dealbreakers that
contributed to my decision to quit.  One of the big ones is that I
believed the organizational flatness and individual agency 
at the company contributed to a lack of focus on long term, difficult projects.

**Why did I leave Amazon?**

Amazon was a whirlwind to work for.  I actually really enjoyed it there.
I felt like we were truly on the cutting edge and that the company (as well as my team)
was innovating in many respects. I was witness to some major successes and also some spectacular failures.

There were a couple reasons I left:

1.  The biggest reason was definitely that I wanted to move back to the east coast &#x2013; specifically near NYC.
2.  Inside Amazon's walls can feel like a cult.  After two internships and then 1.5 years 
    full time, I felt strong need to see what else was out there.

#### **Projects**

**bucklefrog**

**dserve**

**conversation caterpillar**



#### Technical Material

Remember that feeling when you first learned how to drive a car? You are so focused on nailing all the basics of driving that you don't have any headspace left over for even maintaining a conversation.  As you really get comfortable with it, all those things you needed to focus so hard on in the beginning become second nature -- you can have conversations, mess with music controls, maybe even sneak a text message at a red light.

I think technical interviewing is kind of similar. To have the best chance possible, you need to know all of the basics _cold_.  In order to be able to communicate intelligently about the problems, its helpful to be able to churn out the basics without thought.  That means all of the basic data structure manipulations, big O properties, and sorting algorithms known to the point of memorization (also understood).

**Basic Data Structures Operations**

```
                       Accessing    Searching    Inserting    Deleting
 -------------------------------------------------------------------------
             Array     O(1)         O(N)         O(N)         O(N)
       Linked List     O(N)         O(N)         O(1)         O(1)
Binary Search Tree     O(log N)     O(log N)     O(log N)     O(log N)
    Hash Table/Set     O(1)         O(N)         O(1)         O(1)
```



**LinkedLists**

A linear collection of data elements, whose order is not given by their physical placement in memory. Instead, each element points to the next. This structure allows for efficient insertion or removal of elements from any position in the sequence *during iteration*.

Variations:

- Singly Linked Lists: the most basic form. each node only contains a value and a pointer to next. potentially there could be a container for the whole thing with poppa operations like length.
- Doubly LinkedLists: nodes contain *prev* instead of just *next*. 



```typescript
class LinkedListIterative {
    head = null;
	length = 0;

	get( position ) {
        if ( position > this.length ) {
            throw new Error(`Position outside of list range: ${position}`);
        }
        
        let current = this.head;
        for( let i = 0; i < position; i++) {
            current = current.next;
        }
        return current;
    }

	add( position, value ) {
        let node = { next: null, value };
        if (position === 0) {
            node.next = this.head;
            this.head = node;
        } else {
            let prev = this.get( position - 1 );
            node.next = prev.next;
            prev.next = node;
        }
        this.length++;
	}
    
    remove( position ) {
        if ( ! this.head ) {
            throw new Error('Cannot remove elements from an empty list')
        }
        
        if ( position === 0) {
            this.head = this.head.next;
        } else {
            let prev = this.get( position - 1 );
            prev.next = prev.next.next;
        }
        
        this.length--;
    }
}

// more difficult to insert at positions?
class LinkedListRecursive {
    next = null;
    
    constructor( value ) {
        this.value = value;
    }
    
    add( value ) {
        if ( this.next ) {
            next.add( value );
        } else {
            this.next = new LinkedListRecursive( value );
        }
    }
    
    remove( value ) {
        if ( this.next === null ) {
            throw new Error(`Remove Error: Could not find ${ value }`)
        }
        
        if ( this.next.value === value ) {
            this.next = this.next.next;
        } else {
            this.next.remove( value );
        }
    }
    
    length() {
        if ( this.next === null ) {
            return 1;
        }
        
        return 1 + this.next.length();
    }
    
}
```

**Stacks and Queues**

```typescript
// FIFO
class Stack {
    top = null;
    pop() {
        if ( this.top ) {
            let item = top.value;
            top = top.next;
            return item;
        }
    }
    
    push( value ) {
        this.top = {value, next: this.top};
    }
}

// LIFO
class Queue {
    let first = null;
	let last = null;

    append( value ) {
        if ( ! this.first ) {
            this.first = this.last = { value };
            return;
        }
        this.last.next = { value };
        this.last = last.next;
    }

    shift() {
        if ( ! first ) {
            throw new Error(`Cannot call shift on an empty queue!`)
        }
        
        let value = first.value;
        first = first.next;
        return value;
    }
}
```

**Trees**

```typescript
function assertValue( val )  {
    if ( ! val ) {
        throw new Error(`BST Expects a number, was given: ${ val }`);
    }
}

class BinarySearchTree {
    constructor( value, { left=null, right=null } = {} ) {
        assertValue(value);
        
        this.value = value;
        this.left = left;
        this.right = right;
    }
    
    add( value ) {
        assertValue(value);
        
        // value is less, then put on the left
        if ( value < this.value ) {
            if ( this.left === null) {
                this.left = new BinarySearchTree(value);
            } else {
                this.left.add(value);
            }
            return;
        }
        
        // value is greater, than put on the right
        if ( this.right === null) {
			this.right = new BinarySearchTree(value);
        } else {
			this.right.add(value);
        }
    }
    
    delete( value, parent = null ) {
        // root special case.
        if ( parent === null && this.value === value ) {
            if ( ! this.left && ! this.right ) {
                throw new Error(`bst does not contain value to delete: ${value}`);
            }
            if ( this.left ) {
                this.value = this.left.max();
                this.left.delete(this.value, this);
            } else if ( this.right ) {
                this.value = this.right.min();
                this.right.delete(this.value, this);
            }
            return;
        }
        
        
        // non-root nodes
        if ( value === this.value ) {
            if ( this.left !== null && this.right !== null) {
                const movedValue = this.left.max();
                this.value = movedValue; // temporarily broken state b/c of a dupe.
                this.left.delete(movedValue, this);
            } else {
                const branch = parent.left === this ? 'left' : 'right';
                const onlyChild = this.left ? this.left : this.right;
                parent[branch] = onlyChild;
            }
        }
        
        if ( value > this.value ) {
            if ( this.right ) {
                this.right.delete(value, this);
            } else {
                throw new Error(`value not found in bst: ${value}`);
            }
            return;
        }
        
        if ( this.left ) {
            this.left.delete(value, this);
        } else {
            throw new Error(`value not found in bst: ${value}`);
        }
    }
    
    max() {
        if ( this.right ) {
            return this.right.max();
        }
        return this.value;
	}
    
    min() {
        if ( this.left ) {
            return this.left.min();
        }
        return this.value;
    }
    
    height(d = 0) {
        let l = d;
        let r=d;
        if ( this.left ) {
            l = this.left.height(d+1);
        }
        if ( this.right ) {
            r = this.right.height(d+1);
        }
        
        return Math.max(l,r);
    }
        
    visitInOrder(fn, node=this) {
        if ( node.left ) { 
            node.visitInOrder(fn, node.left);
        }
        fn(node.value);
        if( node.right ) {
            node.visitInOrder(fn, node.right);
        }
    }
    
    visitPostOrder(fn, node=this) {
        if ( node.left ) { 
            node.visitPostOrder(fn, node.left);
        }
        if( node.right ) {
            node.visitPostOrder(fn, node.right);
        }
        fn(node.value);
    }
    
    visitPreOrder(fn, node=this) {
        fn(node.value);
        if ( node.left ) { 
            node.visitPreOrder(fn, node.left);
        }
        if( node.right ) {
            node.visitPreOrder(fn, node.right);
        }
    }
}

// ---------------
// Graph Functions
// ----------------

```



### Cracking the Coding Interview

##### Chapter 1: arrays and strings

1. Implement an algorithm to determine if a string has all unique characters. What if you can not use additional data structures?

   ```typescript
   // with data structure - O( n )
   function allUniq( str ) {
       const seen = new Set();
       for (const char of str) {
           if (seen.has(char)) {
               return false;
           }
           seen.add(char)
       }
       return true;
   }
   
   // without ds - O ( n ^2 )
   function allUniq( str ) {
       for ( let i = 0; i < str.length - 1; i++ ) {
           for ( let j = i + 1; j < str.length; j++ ) {
               if ( str[i] === str[j] ) {
                   return false;
               }
           }
       }
       return true;
   }
   ```

2. Write code to reverse a C-Style String. (C-String means that “abcd” is represented as five characters, including the null character.)

   ```typescript
   // mutate string in place.
   function reverse( str ) {
       for (let i = 0; i < (str.length)/2; i++) {
           swap( str, i, str.length-i-1-1);
       }
   }
   
   // mutation! swap the elements at position i and j within the array arr.
   function swap( arr, i, j ) {
       let temp = arr[i];
       arr[i] = arr[j];
       arr[j] = temp;
   }
   ```

3. Design an algorithm and write code to remove the duplicate characters in a string without using any additional buffer. NOTE: One or two additional variables are fine. An extra copy of the array is not. 
```typescript
   // assume c-style string again? remove means shift everything to the left?
   function dedupe( str ) {
       let tail = 1;
       for (let i = 1; i < str.length; i++ ) {
           let dupe = false;
           for (let j = 0; j < tail; j++ ) {
               if ( str[i] === str[j] ) {
                   console.error('DUPE', i,j)
                   dupe = true;
               }
           }
           if ( ! dupe ) {
               str [ tail ] = str[i];
               tail++;
           }
       }
       str[tail] = null;
       return str;
   }
```
3.1 FOLLOW UP: Write the test cases for this method. 

   ```typescript
   dedupe(null); // null
   dedupe([null]); // empty string
   dedupe(['a', null]); // single char string
   dedupe(['a','b','c','d']) // no dupes
   dedupe(['a', 'a', null]); // two char dupe string
   dedupe(['a', 'a', 'a', 'b', 'b', 'c', 'c', 'c', null]); // all contiguous dupes
   dedupe(['a','b','a','b']) // alternating dupes
   ```

   

4. Write a method to decide if two strings are anagrams or not.

```typescript
// sorting them should easily tell us if they have the same characters or not.
function isAnagram( str1, str2 ) {
    const sorted1 = Array.from( str1 ).sort();
    const sorted2 = Array.from( str2 ).sort();
    return sorted1 === sorted2;
}
```
5. Write a method to replace all spaces in a string with ‘%20’. 

```typescript
// using stdlib
function encodeSpaces( str ) {
  return str.replace(/ /g, '%20');
}
```

6. Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes, write a method to rotate the image by 90 degrees. Can you do this in place? 

```typescript
// image is a 2D array
// e.g: 
//  1 2 3     7 4 1
//  4 5 6 --> 8 5 2
//  7 8 9     9 6 3
// -----------------

// I HATE THIS.. always been the hardest for me.
function rotate90( img ) {
    
}
```

1. Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column is set to 0. 

```typescript
function zeroRow( arr2d, row ) {
    if ( ! arr2d || ! row ) {
        throw new Error(`Must supply both a 2d array and a row`)
    }
    for ( let col = 0; col < arr2d[row].length; col++) {
        arr2d[row][col] = 0;
    }
}

function zeroCol( arr2d, col ) {
    if ( ! arr2d || ! col ) {
        throw new Error(`Must supply both a 2d array and a col`)
    }
    for ( let row = 0; row < arr2d.length; row++) {
        arr2d[row][col] = 0;
    }
}

function infectiousZero( arr2d ) {
    if ( ! Array.isArray(arr2d) ) {
        throw new Error(`Must supply an array to infectiousZero`)
    }
    const rows = [];
    const cols = [];
    for ( let row = 0; row < arr2d.length; row++) {
        for ( let col = 0; col < arr2d[row].length; col++ ) {
            if ( arr2d[row][col] === 0 ) {
                rows.push(row);
                cols.push(col);
            }
        }
    }
    rows.forEach( row => zeroRow(arr2d, row));
    cols.forEach( col => zeroCol(arr2d, col));
}
```



1. Assume you have a method isSubstring which checks if one word is a substring of another. Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using only one call to isSubstring (i.e., “waterbottle” is a rotation of “erbottlewat”). 

```typescript
function isRotation(str1, str2) {
    if ( ! str1 || ! str2 || str1.length !== str2.length ) {
        return false;
    }
    
    return isSubstring( str1+str1, str2 )
}
```

##### Chapter 2: Linked Lists

1. Write code to remove duplicates from an unsorted linked list. 

   1. FOLLOW UP: How would you solve this problem if a temporary buffer is not allowed? 

   ```typescript
   // operator conditions
   // falsy args --> error
   // assumption: second will always be a set
   // falsy --> throw error
   
   // test cases
   // 1 -> 1
   // 1,1 -> 1
   // 1,2,3,1,2 -> 1,2,3
   // 1,2,3 -> 1,2,3
   function removeDupes(node, set = new Set()) {
       if (! node ) {
           throw new Error(`must provide head node as the first arg, but was given ${node}`)
       }
       
       if ( ! node.next ) {
           return;
       }
       
       set.add(node.value);
       while (node.next && set.has(node.next.value )) {
           node.next = node.next.next;
       }
       
       // short circuit if we ran out of nodes in the while loop.
       if ( ! node.next ) {
           return;
       }
       
       return removeDupes(node.next, set);
   }
   
   // FOLLOW-UP
   function removeNodesWithVal(node, val) {
       if ( ! node ) {
           return;
       }
       
       while (node.next) {
           if ( node.next.value === val) {
               node.next = node.next.next;
           } else {
               node = node.next;
           }
       }
   }
   
   function removeDupes(node) {
       while (node.next) {
           removeNodesWithVal(node, node.value);
           node = node.next;
       }
   }
   ```

2. Implement an algorithm to find the nth to last element of a singly linked list. 

```typescript
// arg checks:
// ------------
// falsy node --> error
// non-number n --> error, negative n --> error

// test cases
// -----------
// undefined, 2 --> throw
// [1,2,3], -1 --> throw
// [1,2,3], 0 --> 3
// [1,2,3], 1 --> 2
// [1,2,3], 2 --> 1
// [1,2,3], 3 --> error!
// [], 0 --> error

function nthToLast( node, n) {
    if ( ! node || ! Number.isFinite(n) || n < 0 ) {
        throw new Error(`invalid params provided`);
    }
    
    let current = node;
    let headstart = node;
    let i = 0;
    for (let i = 0; i < n; i++) {
        if (!headstart) {
            throw new Error(`list is not long enough to get the nth element: ${n}`)
        }
        headstart = headstart.next;      
    }
    
    while (headstart.next) {
        headstart = headstart.next;
        current = current.next;
    }
    return current;
}
```

1. Implement an algorithm to delete a node in the middle of a single linked list, given only access to that node. 

```typescript
/* test cases
 * -----------
 * falsy --> error
 * 1 --> ...? cannot be done?
 * 1,2 --> 2
 * 1,2,3 --> 2,3
 */
function deleteNode(node) {
    if ( ! node ) {
        throw new Error(`Must be given a linked list node as the first argument`);
    }
    
    if ( ! node.next ) {
        throw new Error(`Cannot remove the last node in the list`);
    }
    
    node.value = node.next.value;
    node.next = node.next.next;
}
```

1. You have two numbers represented by a linked list, where each node contains a single digit. The digits are stored in reverse order, such that the 1’s digit is at the head of the list. Write a function that adds the two numbers and returns the sum as a linked list. 

```typescript
const ZERO = { value: 0 };
function add(node1 = ZERO, node2 = ZERO, c = 0) {
    if ( ! node1 || ! node2 || ! node1.value || ! node2.value ) {
        throw new Error(`Must provide two linkedlist nodes`)
    }
    
    const value = (node1.value + node2.value + c) % 10;
    const carry = Math.floor((node1.value + node2.value + c) / 10);
    const next = (node1.next || node2.next) 
    	? add( node1.next, node2.next, carry)
        : null;
    
    return { value, next };
}
```

1. Given a circular linked list, implement an algorithm which returns node at the beginning of the loop. 

```typescript
/* Test Cases
 * ----------
 * 1,2,3,4,2.... --> 2
 * 1,1... --> 1
 */
function findBeginning( head ) {
    if ( ! head || ! head.value ) {
        throw new Error(`Must provide a linkedlist node, was given ${head}`);
    }
    if ( ! head.next ) {
        throw new Error(`There is no cycle in the linkedlist`);
    }
    let tortoise = head;
    let hare = head;
    while ( hare.next != null && hare.next.next !== null ) {
        tortoise = tortoise.next;
        hare = hare.next.next;
        if ( tortoise === hare) {
            break;
        }
    }
    
    if ( hare !== tortoise ) {
        throw new Error(`There is no cycle in this linkedlist`);
    }
    
    tortoise = head;
    while( hare !== tortoise ) {
        hare = hare.next;
        tortoise = tortoise.next;
    }
    console.error(tortoise, hare)
    return tortoise;
}
```

##### Chapter 3: Stacks and Queues

1. Describe how you could use a single array to implement three stacks. 

```typescript
const STACK_MAX_SIZE = 100; // what should we make this?

class ThreeStacks {
    arr = new Array(STACK_MAX_SIZE * 3);
    
    stackIndex = [0, 0, 0];
    
    idx(stackNum) {
        return (STACK_MAX_SIZE * stackNum) + stackindex[stackNum];
    }
    
    push(stackNum, value) {
        if (this.stackIndex(stackNum) === STACK_MAX_SIZE) {
            throw new Error(`TODO: must implement resizing`);
        }
        
        arr[this.idx(this.stackNum)] = value;
        this.stackIndex[stackNum]++;
    }
    
    pop(stackNum) {
        if (this.idx(stackNum) === 0) {
            throw new Error(`Cannot pop from an empty stack`);
        }
        
        this.stackNum[stackNum]--;
        return arr[this.idx(stackNum)]
    }
}
```



1. How would you design a stack which, in addition to push and pop, also has a function min which returns the minimum element? Push, pop and min should all operate in O(1) time. 

   ```typescript
   const last = arr => arr[ arr.length -1 ];
   
   class Stack {
       arr = [];
       mins = [];
       
       push(value) {
           const ret = arr.push(value);
           let min = Math.min( last(mins), value);
           mins.push(min);
           return ret;
       }
       
       min() {
           if (arr.length === 0) {
               throw new Error(`Cannot call min of an empty Stack`);
           }
           
           return last(mins);
       }
       
       pop() {
           if ( arr.length === 0) {
               throw new Error(`Cannot call min of an empty Stack`);
           }
           mins.pop;
           return arr.pop();
       }
   }
   ```

2. Imagine a (literal) stack of plates. If the stack gets too high, it might topple. Therefore, in real life, we would likely start a new stack when the previous stack exceeds some threshold. Implement a data structure SetOfStacks that mimics this. SetOfStacks should be composed of several stacks, and should create a new stack once the previous one exceeds capacity. SetOfStacks.push() and SetOfStacks.pop() should behave identically to a single stack (that is, pop() should return the same values as it would if there were just a single stack). 

   FOLLOW UP 

   Implement a function popAt(int index) which performs a pop operation on a specific sub-stack. 

   ```typescript
   const MAX_STACK_SIZE = 3;
   
   const last = arr => arr[arr.length-1];
   const deleteAt = (arr, idx) => arr.splice(idx, 1);
   
   class SetOfStacks {
       const stacks = [];
   
       push(value) {
           // if set of stacks is fully empty
           if ( this.stacks.length === 0 ) {
               this.stacks.push( [ value ] );
               return value;
           }
           
           // if the latest stack we are adding to is full and we must add a new stack to the set
           if (last(this.stacks).length === MAX_STACK_SIZE) {
               this.stacks.push(  [ value] );
               return value;
           }
           
           // else, if there is room in the last stack
           return last(last(this.stacks)).push(value);
       }
       
       pop() {
           if ( this.stacks.length === 0 ) {
               throw new Error(`Cannot pop an items off of an empty stack`);
           }
           
           const poppped = last(this.stacks).pop();
           // if we popped off the only element of the last stack then remove the whole stack
           if ( last(this.stacks).length === 0) {
               this.stacks.pop();
           }
           
           return popped;
       }
   
       // tradeoff of space vs. time. may not reclaim space if do not move everything.
       // but will be costly to shift everything.
   	// decided on easier one to implement: faster and ignore extra spaces.
       popAt(idx) {
           if ( ! this.stacks[idx] ) {
               throw new Error(`Substack does not exist: ${idx}`);
           }
           
           const popped = this.stacks[idx].pop();
           if ( this.stacks[idx].length === 0) {
               deleteAt(this.stacks, idx);
           }
           return popped;
       }
   }
   ```

3. In the classic problem of the Towers of Hanoi, you have 3 rods and N disks of different sizes which can slide onto any tower. The puzzle starts with disks sorted in ascending order of size from top to bottom (e.g., each disk sits on top of an even larger one). You have the following constraints: 

   (A) Only one disk can be moved at a time. 

   (B) A disk is slid off the top of one rod onto the next rod. 

   (C) A disk can only be placed on top of a larger disk. 

   Write a program to move the disks from the first rod to the last using Stacks. 

   ```typescript
   /*               TOWER OF HANOI
    * ----------------------------------------------
    *
    *   -										-
    *  ---    empty empty -->  empty empty    ---
    * -----								  -----
    */
   function solve( rods ) {
       move(rods[0].length, rods[0], rods[1], rods[2]);
   }
   
   function move(n, fromPeg, toPeg, aux ) {
       // base case move nothing
       if ( n === 0) {
           return;
       }
       // otherwise move everything except the last one to the spare tower
       move(n-1, fromPeg, aux, toPeg);
       // now there is the biggest one left in the toPeg, n-1 in the aux, so we can directly move the big one fromPeg toPeg
       toPeg.push(fromPeg.pop());
       // now the n-1 from the aux to the toPeg using the fromPeg as an aux (since it is empty)
       move(n-1, aux, toPeg, fromPeg);
   }
   ```

4. Implement a MyQueue class which implements a queue using two stacks. 

   ```typescript
   class MyQueue {
       stack1 = []; // push all enqueued things here. until the first dequeue
       stack2 = []; // on first dequeue, push all of stack1 here, then we can pop until empty.
       
       rollover() {
           while(stack1.length > 0) {
               stack2.push(stack1.pop);
           }
       }
       
       enqueue( value ) {
           stack1.push(value);
       }
       
       dequeue() {
           if (stack1.length === 0 && stack2.length === 0) {
               throw new Error(`Cannot call dequeue on an empty MyQueue`);
           }
           
           if ( stack2.length === 0 ) {
               this.rollover();
           }
           
           return stack2.pop();
       }
       
       peek() {
           if (stack1.length === 0 && stack2.length === 0) {
               throw new Error(`Cannot call dequeue on an empty MyQueue`);
           }
           
           if ( stack2.length === 0 ) {
               this.rollover();
           }
           
           return stack2.peek();
       }
       
       size() {
           return stack1.length + stack2.length;
       }
   }
   ```

1. Write a program to sort a stack in ascending order. You should not make any assumptions about how the stack is implemented. The following are the only functions that should be used to write this program: `push`, `pop`, `peek`, `isEmpty` 

```typescript
// Uses O( n^2 ) time complexity -- does not sort in place, returns a new sorted stack.
// Uses O( 2 * n ) space.
function sort(stack) {
    const sorted = [];
    while (stack.length > 0) {
        const tmp = stack.pop();
        while ( sorted.length > 0 && sorted.peek() > tmp ) {
            stack.push(sorted.pop());
        }
        sorted.push(tmp);
    }
    return sorted;
}
```

##### Chapter 4: Trees and Graphs

1. Implement a function to check if a tree is balanced. For the purposes of this question, a balanced tree is defined to be a tree such that no two leaf nodes differ in distance from the root by more than one.

   ```typescript
   function isBalanced( root ) {
       if ( ! root ) {
           return true;
       }
       
       return (maxDepth(root) - minDepth(root)) <= 1;
   }
   
   function maxHeight(node) {
       if ( ! node ) {
           return 0;
       }
       
       return 1 + Math.max(maxHeight(node.left), maxHeight(node.right));
   } 
   
   function minHeight(node) {
       if ( ! node ) {
           return 0;
       }
       
       return 1 + Math.min(minHeight(node.left), minHeight(node.right));
   } 
   ```

2. Given a directed graph, design an algorithm to find out whether there is a route between two nodes. 

```typescript
/*
 * 
 * A -> B 
 *		|-> C -> G
 *		|->	D
 *
 * // A,D --> true
 * 
 */
function connected(a, b) {
    let seenB = false;
    bfs( a, node => {
        if ( node === b) {
            seenB = true;
        }
    } );
    
    return seenB;
}

// bfs implementation w/ visitor pattern
function bfs(node, fn) {
    // implement bfs.
    let visited = new Set();
    let to_visit = [a];
    while ( to_visit.length !== 0 ) {
        const curr = to_visit.pop();
        fn(curr);
        
        visited.add(curr);
        for ( const sibling of curr.sublings() ) {
            if ( ! visited.has(sibling)) {
                to_visit.push(sibling);
            }
        }
    }
    return;
}
```



1. Given a sorted (increasing order) array, write an algorithm to create a binary tree with minimal height. 

```typescript
// test case
// --------
//
// idx =  0  1  2   3   4    5
// arr = [2, 7, 20, 99, 100, 5000]

// tree = 
//       20
//   2        100
// 7 null    99 5000
// 
function makeBalancedBST(arr, start=0, end=arr.length-1) {
    if ( ! arr ) {
        throw new Error(`Must be given array, but was given: ${arr}`);
	}
    
    if ( start > end ) {
        return null;
    }
    
    if ( start === end ) {
        return new BinarySearchTree(arr[start]);
    }
    
    let mid = start + Math.floor((end-start)/2);
    let node = new BinarySearchTree(arr[mid]);
    node.left = makeBalancedBST(arr, start, mid-1);
    node.right = makeBalancedBST(arr, mid+1, end);
    
    return node;
}

```

1. Given a binary search tree, design an algorithm which creates a linked list of all the nodes at each depth (i.e., if you have a tree with depth D, you’ll have D linked lists). 

```typescript
/*
 *       7              [    7,
 *    4    20   ----->      4, 20,
 *  1  5  10  22         1, 5, 10, 22 ]
 */
// question! should the linkedlists be sorted? 4,20? 20,4

function bst_to_lists( node, d=0, lists=[] ) {
    if ( lists[d] ) {
        lists[d].push( node.value );
    } else {
        lists[d] = [ node.value ];
    }
    
    if ( node.left ) {
    	bst_to_lists(node.left, d+1, lists);   
    }
    
    if ( node.right ) {
        bst_to_lists(node.right, d+1, lists);
    }
    
    return ll;
}

// bst_to_listss( treeUpThere )
```

1. Write an algorithm to find the ‘next’ node (i.e., in-order successor) of a given node in a binary search tree where each node has a link to its parent. 

```typescript
function next( node ) {
    if ( node.right ) {
        return min(node.right);
    }
    
    let curr = node.parent;
    while ( curr.value < node ) {
        if ( ! curr.parent ) {
            throw new Error(`There is no next for this node: ${node.value}`);
        }
        curr = curr.parent;
    }
    
    return curr;
}

function min( node ) {
    if ( node.left ) {
        return min(node.left);
    }
    return node;
}
```



1. Design an algorithm and write code to find the first common ancestor of two nodes in a binary tree. Avoid storing additional nodes in a data structure. NOTE: This is not necessarily a binary search tree. 

```typescript

```



1. You have two very large binary trees: T1, with millions of nodes, and T2, with hun- dreds of nodes. Create an algorithm to decide if T2 is a subtree of T1. 
2. You are given a binary tree in which each node contains a value. Design an algorithm to print all paths which sum up to that value. Note that it can be any path in the tree - it does not have to start at the root. 

### Misc. Problems

**Josephus**

People are standing in a circle waiting to be executed. Counting begins at a specified point in the circle and proceeds around the circle in a specified direction. After a specified number of people are skipped, the next person is executed. The procedure is repeated with the remaining people, starting with the next person, going in the same direction and skipping the same number of people, until only one person remains, and is freed.

The problem — given the number of people, starting point, direction, and number to be skipped — is to choose the position in the initial circle to avoid execution.

```typescript
// solution idea: 
// 1. make a linked list with values of the index of the people. reverse if dir = -1.
// 2. iterate through list (skipping n values per hop) removing all the dead people as you find them.
// 3. last node remaining contains the safe index.

// precondition n > 0
const makeLList = n => {
    const head = { value: 1 };
    
    let node = head;
    while ( node.value < n) {
        node.next = { value: node.value+1 };
        node = node.next;
    }

    // make the cycle
    node.next = head;
    
    return head;
}

const nth( head, n) {
    let i = 0;
    let curr = head;
    while ( i < n) {
        curr = curr.next;
	}
    
    return curr;
}

// dir can be 1 or -1.
function solve(numPeople, startIndex, dir, skip) {
    const peeps = makeLList(numPeople); 
    // TODO: reverse ll if dir === -1
    let current = nth(peeps)
    while ( current.next != current ) {
        const prevToKill = nth(current, skip);
        prevToKill.next = prevToKill.next.next;
    }
    
    return current.value;
}

// ACTUAL SOLUTION IS RECURSIVE MATH INSTEAD.
```

**Binary Tree Symmetry**

```typescript
function isSymmetric( root ) {
    helper(root.left, root.right);
}

function helper(left, right) {
    // if either is null, return true if they both are.
    if ( left === null || right === null ) {
        return left === null && right === null;
    }
    
    return left.value === right.value &&
        helper(left.left, right.right) &&
        helper(left.right, right.left );
}
```

**BST Inversion**

```typescript
function invert( root ) {
    if ( ! root ) {
        return null;
    }
    
    const right = root.right
    	? invert(root.right)
    	: null;
    const left = root.left
    	? invert(root.left)
    	: null;
    
    root.left = right;
    root.right = left;
    
    return root;
}
function helper()
```

**Realtime Spell Checker**

**Find all words in a Boggle Board**

**Find the sqrt of a number using binary search and only +-/***

**binary search**

```typescript

```

**QuickSort**

```typescript
function quicksort( arr, left, right ) {
    if ( left > right ) {
        return arr;
    }
    const pivot = right;
    const partitionIndex = partition(arr, left, right, pivot);
    quicksort(arr, left, partitionIndex - 1);
    quicksort(arr, partitionIndex + 1, right);
}

function partition(arr, pivot, left, right){
    const pivotValue = arr[pivot];
    let partitionIndex = left;
    
    for (let i = left; i < right; i++){
        if(arr[i] < pivotValue){
            swap(arr, i, partitionIndex);
            partitionIndex++;
        }
    }
    swap(arr, right, partitionIndex);
    return partitionIndex;
}

function swap(arr, i, j) {
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}
```

**MergeSort**

```typescript
function mergesort( arr ) {
    if ( arr.length < 2) {
        return arr;
    }
    
    const mid = Math.floor(arr.length/2)
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
    return merge( mergesort(left), mergesort(right) );
}

function merge( arr1, arr2 ) {
    let merged = [];
    let arr1Index = 0;
    let arr2Index = 0;
    
    while( arr1Index < arr1.length && arr2Index < arr2.length ) {
        if ( arr1[arr1Index] < arr2[arr2Index] ) {
            merged.push(arr1[arr1Index]);
            arr1Index++;
        } else {
            merged.push(arr2[arr2Index]);
            arr2Index++;
        }
    }
    
    return merged.concat(arr1.slice(arr1Index)).concat(arr2.slice(arr2Index));
}
```



**tell if a string is a palindrome.  FOLLOW UP: find the largest palindrome within a string**

**how many ways to make a dollar out of coins**

```typescript
// given the coins worth: 1p, 2p, 5p, 10p, 20p, 50p, £1 (100p) and £2 (200p),
// how many ways can you make 2 dollars?

let coins = [1, 2, 5, 10, 20, 50, 100, 200 ].reverse();
function countWays( amt=200, index = 0, memo = new Map() ) {
    if ( amt === 0 ) {
        return 1;
    }
    if ( index >= coins.length ) {
		return 0;
    }
    
    const key = `${amt}-${index}`;
    if ( memo.has(key)) {
        return memo.get(key);
    }
    
    let ways = 0;
    if ( coins[index] <= amt ) {
        ways += countWays( amt - coins[index], index, memo );
    }
    ways += countWays( amt, index + 1, memo);
    memo.set(keys,ways);
    return ways;
}
```

**binary search**

```typescript
function binarySearch(arr, el, compare_fn) {
    let low = 0;
    let hi = arr.length - 1;
    while low <= high) {
        var mid = (low + hi) / 2;
        var cmp = compare_fn(el, arr[mid]);
        if (cmp > 0) {
            low = k + 1;
        } else if(cmp < 0) {
            hi = k - 1;
        } else {
            return k;
        }
    }
    return -1;
}
```

**compute all subsets**

```typescript
function getSubsets( arr, i = 0, buffer=[], all=[[]] ) {
    if ( i >= arr.length ) {
        return all;
    }
    
    const withItem = buffer.slice(0).concat([arr[i]]);
    const withoutItem = buffer.slice(0);
    all.push(withItem);
   	getSubsets(arr, i+1, withItem, all);
    getSubsets(arr, i+1, withoutItem, all);
    return all;
}
```

**reverse linked list**

```typescript
function reverse( head ) {
    if ( ! head || head.next === null ) {
        return head;
    }
    
    const rest = reverse(head.next);
    head.next.next = head;
    head.next = null;
    return rest;
}
```

## Questions I was actually asked

#### Google Onsite

**Unit conversion:** Given a data structure containing the conversion data between units, for example "USD" "EUR" 1.3 ..., write a function for converting between any two units.  Ends up being a graph problem with many layers of trickiness in it.  It is a graph composed of multiple disconnected graphs (i.e. watt/horsepower cannot be converted to a currency like USD), and also we are restricted in that we can't use N^2 space yet still want constant time output.  Didn't end up coding the whole thing but mapped out the algo where for each disconnected graph you need to pick a Ended up being a graph problem where I needed to represent it with an adjacency list since traversing it wasn't simple because it had multiple disconnected graphs within it. Then bfs etc. Not easy

**Redact text in a file**: question was asked in a very ambiguous way so the first 5 minutes were  just me asking questions. Eventually the question became: "given a `filepath` and a list of `words` (think thousands of words), write out a new file with the exact same contents of the file at filepath except that any word found in `words` should be replaced with hashtags (redacted).  Note that the file at `filepath` is far too large to hold in memory.

	**Follow up**: handle heiphens at ends of lines

**Super Smash Bros Powerup**: Imagine representing a level of SSB in some data structure where the only things in the level were platform.  Implement a "gravity" powerup that makes all of the platforms fall all the way to the ground as far as they can until they hit either the floor or a platform below it.. The trick in optimizing this problem is maintaining an array of size levelWidth where you hold the lowest row a block could drop to per column that you update as you drop platforms from bottom to top.

**JS Algos / Memoization etc**: First I was supposed to create a `retry` mechanic for a callback receiving function such that if it failed you would need to retry it N times. Was trivial with recursion.  Then I needed to implement `Promise.all`. Lastly she made me implement something I can't really remember... a memoized something. I think maybe figure out if a word can be shrunk to nothing given a set of words and a start word.

**Word Ladder Variation**: Given a start word, an end word, and a list of words, can you get from start to end by modifying one letter at a time via (insertion/deletion/replacement) anywhere. This was hard and I really really fumbled and wrote gross code. Ended up creating a non performant N^2 sorta algorithm. also created a helper for discovering if a word is `oneEditAway`ifinalfinal