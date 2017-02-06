CREATE TABLE campaigns (
    `list_id` INT,
    `list_stationOrderNumber` INT,
    `list_videaOrderNumber` INT,
    `list_advertiser` VARCHAR(20) CHARACTER SET utf8,
    `list_agency` VARCHAR(23) CHARACTER SET utf8,
    `list_product` VARCHAR(3) CHARACTER SET utf8,
    `list_estimateNumber` INT,
    `list_revenue` INT,
    `list_flightStartDate` VARCHAR(11) CHARACTER SET utf8,
    `list_flightEndDate` VARCHAR(11) CHARACTER SET utf8,
    `list_campaignDeliveryPercent` VARCHAR(4) CHARACTER SET utf8,
    `list_currentGrpsImps` NUMERIC(3, 1),
    `list_purchasedGrpsImps` NUMERIC(3, 1),
    `list_difference` NUMERIC(2, 1),
    `list_currentHouseholdGrpsImps` NUMERIC(4, 1),
    `list_demoName` VARCHAR(6) CHARACTER SET utf8,
    `list_orderLastUpdated` VARCHAR(35) CHARACTER SET utf8,
    `list_weeksRemaining` INT,
    `list_daypartSummary_total_purchasedGrpsImps` NUMERIC(3, 1),
    `list_daypartSummary_total_purchasedToDate` NUMERIC(3, 1),
    `list_daypartSummary_total_deliveredToDate` NUMERIC(3, 1),
    `list_daypartSummary_total_percentage` NUMERIC(2, 1),
    `list_daypartSummary_total_difference` NUMERIC(2, 1),
    `list_daypartSummary_items_dayparts` VARCHAR(5) CHARACTER SET utf8,
    `list_daypartSummary_items_purchasedToDate` NUMERIC(3, 1),
    `list_daypartSummary_items_deliveredToDate` NUMERIC(3, 1),
    `list_daypartSummary_items_percentage` NUMERIC(3, 2),
    `list_daypartSummary_items_difference` NUMERIC(2, 1)
);
INSERT INTO campaigns VALUES (876542,876542,131542,'Metro Wireless','The Media Masters Group','GEN',23,41000,'01/30/17','02/23/17','80%',25.3,31.5,-6.2,47.6,'A18-49','2017-01-17T09:43:40.365Z',3,78.8,31.5,25.3,0.8,-6.2,'EM',12.4,9.5,0.77,-2.9);
INSERT INTO campaigns VALUES (876542,876542,131542,'Metro Wireless','The Media Masters Group','GEN',23,41000,'01/30/17','02/23/17','80%',25.3,31.5,-6.2,47.6,'A18-49','2017-01-17T09:43:40.365Z',3,78.8,31.5,25.3,0.8,-6.2,'EN',5.8,6,1.03,0.2);
INSERT INTO campaigns VALUES (876542,876542,131542,'Metro Wireless','The Media Masters Group','GEN',23,41000,'01/30/17','02/23/17','80%',25.3,31.5,-6.2,47.6,'A18-49','2017-01-17T09:43:40.365Z',3,78.8,31.5,25.3,0.8,-6.2,'PR',9,7.7,0.86,-1.3);
INSERT INTO campaigns VALUES (876542,876542,131542,'Metro Wireless','The Media Masters Group','GEN',23,41000,'01/30/17','02/23/17','80%',25.3,31.5,-6.2,47.6,'A18-49','2017-01-17T09:43:40.365Z',3,78.8,31.5,25.3,0.8,-6.2,'LN',0,0,0,0);
INSERT INTO campaigns VALUES (876542,876542,131542,'Metro Wireless','The Media Masters Group','GEN',23,41000,'01/30/17','02/23/17','80%',25.3,31.5,-6.2,47.6,'A18-49','2017-01-17T09:43:40.365Z',3,78.8,31.5,25.3,0.8,-6.2,'LF',4.3,2.1,0.49,-2.2);
INSERT INTO campaigns VALUES (876542,876542,131542,'Metro Wireless','The Media Masters Group','GEN',23,41000,'01/30/17','02/23/17','80%',25.3,31.5,-6.2,47.6,'A18-49','2017-01-17T09:43:40.365Z',3,78.8,31.5,25.3,0.8,-6.2,'Total',31.5,25.3,0.8,-6.2);
INSERT INTO campaigns VALUES (876498,876498,135001,'Piedmont Healthcare','Hughes-Martin Agency','HEA',57,37189,'NOT STARTED','NOT STARTED','N/A',0,0,NULL,0,'A25-54','1 week earlier than today''s date',6,78.8,31.5,25.3,0.8,-6.2,'EM',12.4,9.5,0.77,-2.9);
INSERT INTO campaigns VALUES (876498,876498,135001,'Piedmont Healthcare','Hughes-Martin Agency','HEA',57,37189,'NOT STARTED','NOT STARTED','N/A',0,0,NULL,0,'A25-54','1 week earlier than today''s date',6,78.8,31.5,25.3,0.8,-6.2,'EN',5.8,6,1.03,0.2);
INSERT INTO campaigns VALUES (876498,876498,135001,'Piedmont Healthcare','Hughes-Martin Agency','HEA',57,37189,'NOT STARTED','NOT STARTED','N/A',0,0,NULL,0,'A25-54','1 week earlier than today''s date',6,78.8,31.5,25.3,0.8,-6.2,'PR',9,7.7,0.86,-1.3);
INSERT INTO campaigns VALUES (876498,876498,135001,'Piedmont Healthcare','Hughes-Martin Agency','HEA',57,37189,'NOT STARTED','NOT STARTED','N/A',0,0,NULL,0,'A25-54','1 week earlier than today''s date',6,78.8,31.5,25.3,0.8,-6.2,'LN',0,0,0,0);
INSERT INTO campaigns VALUES (876498,876498,135001,'Piedmont Healthcare','Hughes-Martin Agency','HEA',57,37189,'NOT STARTED','NOT STARTED','N/A',0,0,NULL,0,'A25-54','1 week earlier than today''s date',6,78.8,31.5,25.3,0.8,-6.2,'LF',4.3,2.1,0.49,-2.2);
INSERT INTO campaigns VALUES (876498,876498,135001,'Piedmont Healthcare','Hughes-Martin Agency','HEA',57,37189,'NOT STARTED','NOT STARTED','N/A',0,0,NULL,0,'A25-54','1 week earlier than today''s date',6,78.8,31.5,25.3,0.8,-6.2,'Total',31.5,25.3,0.8,-6.2);
INSERT INTO campaigns VALUES (876599,876599,133529,'Papa Johns Pizza','Zone Group Advertising','HOL',8,10650,'ENDED','ENDED','104%',36,34.5,1.5,37.9,'A18-49','2 months earlier than today''s date',0,78.8,31.5,25.3,0.8,-6.2,'EM',12.4,9.5,0.77,-2.9);
INSERT INTO campaigns VALUES (876599,876599,133529,'Papa Johns Pizza','Zone Group Advertising','HOL',8,10650,'ENDED','ENDED','104%',36,34.5,1.5,37.9,'A18-49','2 months earlier than today''s date',0,78.8,31.5,25.3,0.8,-6.2,'EN',5.8,6,1.03,0.2);
INSERT INTO campaigns VALUES (876599,876599,133529,'Papa Johns Pizza','Zone Group Advertising','HOL',8,10650,'ENDED','ENDED','104%',36,34.5,1.5,37.9,'A18-49','2 months earlier than today''s date',0,78.8,31.5,25.3,0.8,-6.2,'PR',9,7.7,0.86,-1.3);
INSERT INTO campaigns VALUES (876599,876599,133529,'Papa Johns Pizza','Zone Group Advertising','HOL',8,10650,'ENDED','ENDED','104%',36,34.5,1.5,37.9,'A18-49','2 months earlier than today''s date',0,78.8,31.5,25.3,0.8,-6.2,'LN',0,0,0,0);
INSERT INTO campaigns VALUES (876599,876599,133529,'Papa Johns Pizza','Zone Group Advertising','HOL',8,10650,'ENDED','ENDED','104%',36,34.5,1.5,37.9,'A18-49','2 months earlier than today''s date',0,78.8,31.5,25.3,0.8,-6.2,'LF',4.3,2.1,0.49,-2.2);
INSERT INTO campaigns VALUES (876599,876599,133529,'Papa Johns Pizza','Zone Group Advertising','HOL',8,10650,'ENDED','ENDED','104%',36,34.5,1.5,37.9,'A18-49','2 months earlier than today''s date',0,78.8,31.5,25.3,0.8,-6.2,'Total',31.5,25.3,0.8,-6.2);
INSERT INTO campaigns VALUES (875912,875912,131642,'Southeast Ford','Auto Advertising Agency','END',22,41450,'ENDED','ENDED','91%',87,96,-9,69.1,'A25-54','1 month''s earlier than today''s date',0,78.8,31.5,25.3,0.8,-6.2,'EM',12.4,9.5,0.77,-2.9);
INSERT INTO campaigns VALUES (875912,875912,131642,'Southeast Ford','Auto Advertising Agency','END',22,41450,'ENDED','ENDED','91%',87,96,-9,69.1,'A25-54','1 month''s earlier than today''s date',0,78.8,31.5,25.3,0.8,-6.2,'EN',5.8,6,1.03,0.2);
INSERT INTO campaigns VALUES (875912,875912,131642,'Southeast Ford','Auto Advertising Agency','END',22,41450,'ENDED','ENDED','91%',87,96,-9,69.1,'A25-54','1 month''s earlier than today''s date',0,78.8,31.5,25.3,0.8,-6.2,'PR',9,7.7,0.86,-1.3);
INSERT INTO campaigns VALUES (875912,875912,131642,'Southeast Ford','Auto Advertising Agency','END',22,41450,'ENDED','ENDED','91%',87,96,-9,69.1,'A25-54','1 month''s earlier than today''s date',0,78.8,31.5,25.3,0.8,-6.2,'LN',0,0,0,0);
INSERT INTO campaigns VALUES (875912,875912,131642,'Southeast Ford','Auto Advertising Agency','END',22,41450,'ENDED','ENDED','91%',87,96,-9,69.1,'A25-54','1 month''s earlier than today''s date',0,78.8,31.5,25.3,0.8,-6.2,'LF',4.3,2.1,0.49,-2.2);
INSERT INTO campaigns VALUES (875912,875912,131642,'Southeast Ford','Auto Advertising Agency','END',22,41450,'ENDED','ENDED','91%',87,96,-9,69.1,'A25-54','1 month''s earlier than today''s date',0,78.8,31.5,25.3,0.8,-6.2,'Total',31.5,25.3,0.8,-6.2);
INSERT INTO campaigns VALUES (875888,875888,131634,'Community Loans Inc.','Vanthrop and Associates','QTR',3567,19100,'01/09/17','02/12/17','96%',51.9,54,-2.1,103.8,'A25-54','3 weeks earlier than today''s date',1,78.8,31.5,25.3,0.8,-6.2,'EM',12.4,9.5,0.77,-2.9);
INSERT INTO campaigns VALUES (875888,875888,131634,'Community Loans Inc.','Vanthrop and Associates','QTR',3567,19100,'01/09/17','02/12/17','96%',51.9,54,-2.1,103.8,'A25-54','3 weeks earlier than today''s date',1,78.8,31.5,25.3,0.8,-6.2,'EN',5.8,6,1.03,0.2);
INSERT INTO campaigns VALUES (875888,875888,131634,'Community Loans Inc.','Vanthrop and Associates','QTR',3567,19100,'01/09/17','02/12/17','96%',51.9,54,-2.1,103.8,'A25-54','3 weeks earlier than today''s date',1,78.8,31.5,25.3,0.8,-6.2,'PR',9,7.7,0.86,-1.3);
INSERT INTO campaigns VALUES (875888,875888,131634,'Community Loans Inc.','Vanthrop and Associates','QTR',3567,19100,'01/09/17','02/12/17','96%',51.9,54,-2.1,103.8,'A25-54','3 weeks earlier than today''s date',1,78.8,31.5,25.3,0.8,-6.2,'LN',0,0,0,0);
INSERT INTO campaigns VALUES (875888,875888,131634,'Community Loans Inc.','Vanthrop and Associates','QTR',3567,19100,'01/09/17','02/12/17','96%',51.9,54,-2.1,103.8,'A25-54','3 weeks earlier than today''s date',1,78.8,31.5,25.3,0.8,-6.2,'LF',4.3,2.1,0.49,-2.2);
INSERT INTO campaigns VALUES (875888,875888,131634,'Community Loans Inc.','Vanthrop and Associates','QTR',3567,19100,'01/09/17','02/12/17','96%',51.9,54,-2.1,103.8,'A25-54','3 weeks earlier than today''s date',1,78.8,31.5,25.3,0.8,-6.2,'Total',31.5,25.3,0.8,-6.2);
INSERT INTO campaigns VALUES (871211,871211,134787,'Sun Valley Bank','Mullberry Way Group','GEN',459,52215,'NOT STARTED','NOT STARTED','N/A',0,0,NULL,NULL,'A25-54','1 month earlier than today''s date',8,78.8,31.5,25.3,0.8,-6.2,'EM',12.4,9.5,0.77,-2.9);
INSERT INTO campaigns VALUES (871211,871211,134787,'Sun Valley Bank','Mullberry Way Group','GEN',459,52215,'NOT STARTED','NOT STARTED','N/A',0,0,NULL,NULL,'A25-54','1 month earlier than today''s date',8,78.8,31.5,25.3,0.8,-6.2,'EN',5.8,6,1.03,0.2);
INSERT INTO campaigns VALUES (871211,871211,134787,'Sun Valley Bank','Mullberry Way Group','GEN',459,52215,'NOT STARTED','NOT STARTED','N/A',0,0,NULL,NULL,'A25-54','1 month earlier than today''s date',8,78.8,31.5,25.3,0.8,-6.2,'PR',9,7.7,0.86,-1.3);
INSERT INTO campaigns VALUES (871211,871211,134787,'Sun Valley Bank','Mullberry Way Group','GEN',459,52215,'NOT STARTED','NOT STARTED','N/A',0,0,NULL,NULL,'A25-54','1 month earlier than today''s date',8,78.8,31.5,25.3,0.8,-6.2,'LN',0,0,0,0);
INSERT INTO campaigns VALUES (871211,871211,134787,'Sun Valley Bank','Mullberry Way Group','GEN',459,52215,'NOT STARTED','NOT STARTED','N/A',0,0,NULL,NULL,'A25-54','1 month earlier than today''s date',8,78.8,31.5,25.3,0.8,-6.2,'LF',4.3,2.1,0.49,-2.2);
INSERT INTO campaigns VALUES (871211,871211,134787,'Sun Valley Bank','Mullberry Way Group','GEN',459,52215,'NOT STARTED','NOT STARTED','N/A',0,0,NULL,NULL,'A25-54','1 month earlier than today''s date',8,78.8,31.5,25.3,0.8,-6.2,'Total',31.5,25.3,0.8,-6.2);
