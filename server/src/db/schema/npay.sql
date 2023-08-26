CREATE TABLE IF NOT EXISTS `users` (
  `ID` int(20) NOT NULL AUTO_INCREMENT,
  `UserID` varchar(20) NOT NULL,
  `Fname` text NOT NULL,
  `Lname` text NOT NULL,
  `PhoneNumber` int(20) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `Pin` text NOT NULL,
  `PhoneVerified` tinyint(1) NOT NULL,
  `EmailVerified` tinyint(1) NOT NULL,
  `LastLogin` datetime(6) NOT NULL,
  `IpAddress` text NOT NULL,
  `DateJoined` datetime(6) NOT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `UserID` (`UserID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

CREATE TABLE IF NOT EXISTS `transactions` (
  `ID` int(20) NOT NULL AUTO_INCREMENT,
  `TransactionID` varchar(20) NOT NULL,
  `Type` text NOT NULL,
  `SenderID` varchar(20) NOT NULL,
  `ReceiverID` varchar(20) NOT NULL,
  `Amount` decimal(10, 2) NOT NULL,
  `TrnsCost` decimal(10, 2) NOT NULL,
  `SenderNotified` tinyint(1) NOT NULL,
  `ReceiverNotified` tinyint(1) NOT NULL,
  `Status` tinyint(1) NOT NULL,
  `TimeStamp` datetime(6) NOT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `TransactionID` (`TransactionID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
