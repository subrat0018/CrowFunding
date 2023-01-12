// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract CrowdFunding {
    struct Drive
    {
        string title;
        string description;
        uint targetAmount;
        uint amountCollected;
        uint deadline;
        address owner;
        string imgurl;
        address[] donors;
        uint[] donations;
    }

    mapping(uint => Drive) drives;
    uint totalDrive = 0;

    function createDrive(string memory _title, string memory _description, uint _targetAmount, uint _deadline, address _owner, string memory _imgurl)public returns(uint)
    {
        require(_deadline > block.timestamp, "Deadline is not valid");

        Drive storage newDrive = drives[totalDrive];
        newDrive.title = _title;
        newDrive.description = _description;
        newDrive.targetAmount = _targetAmount;
        newDrive.deadline = _deadline;
        newDrive.owner = _owner;
        newDrive.imgurl = _imgurl;

        uint currDriveId = totalDrive;
        totalDrive++;
        return currDriveId;
    }

    function donateToDrive(uint _driveId) public payable
    {
        require(_driveId < totalDrive,"The DriveId is not correct");
        require(msg.value > 0,"Check the donation amount");
        Drive storage drive = drives[_driveId];
        drive.amountCollected += msg.value;
        drive.donations.push(msg.value);
        drive.donors.push(msg.sender);
    }

    function getDonors(uint _driveId) public view returns(address[] memory,uint[] memory)
    {
        require(_driveId < totalDrive,"The DriveId is not correct");
        return(drives[_driveId].donors,drives[_driveId].donations);
    }

    function getDrives() public view returns(Drive[] memory)
    {
        Drive[] memory allDrives = new Drive[](totalDrive);
        for(uint i=0;i<totalDrive;i++)
        {
            allDrives[i] = drives[i];
        }
        return allDrives;
    }
}