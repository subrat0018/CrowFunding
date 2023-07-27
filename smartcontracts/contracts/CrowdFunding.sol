// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract CrowdFunding {
    struct Drive {
        string title;
        string description;
        string imgurl;
        address owner;
        uint256 targetAmount;
        uint256 amountCollected;
        uint256 deadline;
        uint256 driveId;
        address[] donors;
        uint256[] donations;
    }

    mapping(uint256 => Drive) drives;
    mapping(address => uint256[]) persons;
    mapping(address => uint256) personDonation;
    uint256 totalDrive = 0;

    function createDrive(
        string memory _title,
        string memory _description,
        uint256 _targetAmount,
        uint256 _deadline,
        address _owner,
        string memory _imgurl
    ) public returns (uint256) {
        require(_deadline > block.timestamp, "Deadline is not valid");

        Drive storage newDrive = drives[totalDrive];
        newDrive.title = _title;
        newDrive.description = _description;
        newDrive.targetAmount = _targetAmount;
        newDrive.deadline = _deadline;
        newDrive.owner = _owner;
        newDrive.imgurl = _imgurl;

        uint256 currDriveId = totalDrive;
        newDrive.driveId = currDriveId;
        persons[_owner].push(currDriveId);

        totalDrive++;
        return currDriveId;
    }

    function donateToDrive(uint256 _driveId) public payable {
        require(_driveId < totalDrive, "The DriveId is not correct");
        require(msg.value > 0, "Check the donation amount");
        Drive storage drive = drives[_driveId];
        drive.amountCollected += msg.value;
        drive.donations.push(msg.value);
        drive.donors.push(msg.sender);
        personDonation[msg.sender] += msg.value;
    }

    function getDonors(
        uint256 _driveId
    ) public view returns (address[] memory, uint256[] memory) {
        require(_driveId < totalDrive, "The DriveId is not correct");
        return (drives[_driveId].donors, drives[_driveId].donations);
    }

    function getDrives() public view returns (Drive[] memory) {
        Drive[] memory allDrives = new Drive[](totalDrive);
        for (uint256 i = 0; i < totalDrive; i++) {
            allDrives[i] = drives[i];
        }
        return allDrives;
    }

    function getDriveByPerson(
        address _owner
    ) public view returns (Drive[] memory) {
        uint256 n = persons[_owner].length;
        Drive[] memory personDrives = new Drive[](n);

        for (uint256 i = 0; i < n; i++) {
            personDrives[i] = (drives[persons[_owner][i]]);
        }
        return personDrives;
    }

    function getPersonDonation(address _owner) public view returns (uint256) {
        return personDonation[_owner];
    }
}
