// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;
import "https://github.com/ipfs/interface-ipfs-core/blob/master/src/index.js";

contract SocialMedia {
    
    struct User {
        string name;
        address addr;
        bool registered;
    }
    
    struct Post {
        uint id;
        string ipfsHash;
        address author;
        uint timestamp;
        uint[] comments;
    }
    
    struct Comment {
        uint id;
        string ipfsHash;
        address author;
        uint timestamp;
    }
    
    mapping (address => User) public users;
    mapping (uint => Post) public posts;
    mapping (uint => Comment) public comments;
    uint public postCount;
    uint public commentCount;
    
    IpfsHttpClient ipfsClient;
    
    event UserRegistered(
        address addr,
        string name
    );
    
    event PostCreated(
        uint id,
        string ipfsHash,
        address author,
        uint timestamp
    );
    
    event CommentCreated(
        uint id,
        string ipfsHash,
        address author,
        uint timestamp
    );
    
    constructor() {
        ipfsClient = new IpfsHttpClient("localhost", 5001);
    }
    
    function register(string memory _name) public {
        require(!users[msg.sender].registered, "User already registered.");
        users[msg.sender] = User(_name, msg.sender, true);
        emit UserRegistered(msg.sender, _name);
    }
    
    function createPost(string memory _content) public async {
        require(bytes(_content).length > 0, "Content is required.");
        require(users[msg.sender].registered, "User must be registered.");
        postCount++;
        bytes memory contentBytes = bytes(_content);
        string memory ipfsHash = await ipfsClient.add(contentBytes);
        posts[postCount] = Post(postCount, ipfsHash, msg.sender, block.timestamp, new uint[](0));
        emit PostCreated(postCount, ipfsHash, msg.sender, block.timestamp);
    }
    
    function createComment(uint _postId, string memory _content) public async {
        require(bytes(_content).length > 0, "Content is required.");
        require(users[msg.sender].registered, "User must be registered.");
        require(posts[_postId].id == _postId, "Post does not exist.");
        commentCount++;
        bytes memory contentBytes = bytes(_content);
        string memory ipfsHash = await ipfsClient.add(contentBytes);
        comments[commentCount] = Comment(commentCount, ipfsHash, msg.sender, block.timestamp);
        posts[_postId].comments.push(commentCount);
        emit CommentCreated(commentCount, ipfsHash, msg.sender, block.timestamp);
    }
    
}
// ABCD
