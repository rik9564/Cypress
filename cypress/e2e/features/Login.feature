Feature: Create TC 61
    The feature file contains a testcase of creating a demo 61 Transaction on TMS Application

  Scenario: Create a TC 61
    Given I am Logged in to Elements Application
    When I Select 'EAM' Application from Application Switch Over
    And I navigated to EAM Main New Transaction Menu
    And I Select TC Code as : '61'
    And I Select Type of Application as : 'Paper Enrollment'
    And I Enter MBI as : '7C7708MPM28'
    And I Select Plan ID as : 'H1001'
    And I Select PBP ID as : '001'
    And I Enter FirstName as : 'Agniva'
    And I Enter LastName as : 'Chowdhury'
    When I Enter Date of Birth : '01/01/1998'
    When I Select Gender as : 'M'

  @focus
  Scenario: Create An EAF File
    When I Create and upload an EAF File With the Following Details:
      | Confirmationnumber | SubmitDate | ContractID | PBPID | SegmentID | MemberTitle | MemberFirstName | MemberMiddleInitial | MemberLastName | MemberBirthDate | MemberGender | MemberAddress1 | MemberAddress2 | Member Address3 | Member City | Member State | Member Zip | Member Phone | MemberEmailAddress | Member HICN | ApplicationSSN | MailingAddress1 | MailingAddress2 | MailingAddress3 | MailingCity | MailingState | MailingZip | MedicarePartA | MedicarePartB | EmergencyContact | EmergencyPhone | EmergencyRelationship | PremiumDeducted | PremiumSource | OtherCoverage | OtherCoverageName | OtherCoverageID | LongTerm | LongTermName | LongTermAddress | LongTermPhone | AuthorizedRepName | AuthorizedRepAddress | AuthorizedRepCity | AuthorizedRepState | AuthorizedRepZip | AuthorizedRepPhone | AuthorizedRepRelationship | Language | ESRD | StateMedicaid | WorkStatus | PrimaryCarePhysician | OtherCoverageGroup | AgentID | SubmitTime | PartDSubAppInd | DeemedInd | SubsidyPercentage | DeemedReasonCode | LISCopayLevelID | DeemedCoPayLevelID | PartDOptOut | SEPReasonCode | SEPCMSReason | PremiumDirectPay | EnrollmentPlanYear | MemberID | GroupNumber | SubGroupNumber | ClassNumber | BillingEntity | EffectiveDate | TransactionType | ApplicationSignDate | CreditableCoverage | UncoveredMonths | ElectionType | MedicaidNumber | SalesLocation | BankAccountType | BankAccountNumber | BankACHRoutingNumber | MedicalPlanNumber | PharmacyPlanNumber | VisionPlanNumber | DentalPlanNumber     | EGHPFlag | PriorCommercialOverride | EmployerSubsidyOverride | SecondaryRXFlag | SecondaryRXID | SecondaryRXGroup | DisenrollmentReason | Secondary RxBIN | Plan1    | Plan2    | Plan3    | Plan4    | Plan5    | Plan6    | Plan7    | Plan8    | Plan9    | Plan10    | UniqueKey | SpanType | SpanValue | SpanStartDate | SpanEndDate | TranslevelPlan1 | TranslevelPlan2 | TranslevelPlan3 | TranslevelPlan4 | TranslevelPlan5 | TranslevelPlan6 | TranslevelPlan7 | TranslevelPlan8 | TranslevelPlan9 | TranslevelPlan10 | PrimaryRxID | LIS Effective Date | LIS Term Date | SCC Code | New to Medicare | Recently moved | Recently returned to US | Extra help for premiums | Extra help for Drug | No more help for Drugs | Long Term Care Facility | Left PACE program | Lost drug coverage | Leaving employer or union | Pharmacy assistance program | Plan ending contract | Disenrolled from SNP | 5 Star Plan | Left MA Plan | PCP ID | IPA Group ID | SEPS Reason | ApplicationType | Premium Withhold Option | RxGroup | RxBIN | RxPCN | Secondary RxPCN | Sales Date | Employer Group Number | Medicare Part D | Second Phone | PCP Last Name | PCP First Name | PCP Eff Date | PCP End Date | PCP Provider ID | Released from Incarceration | Lawful Presence in US | RFI Receipt Date | Medical OSB | Dental OSB | Vision OSB | Other OSB | Future Use 8 | Future Use 9 | Future Use 10 | Future Use 11 | Future Use 12 | Future Use 13 | Future Use 14 | Future Use 15 | Future Use 16 | Future Use 17 | Future Use 18 | Future Use 19 | Future Use 20 |
      |                    |   12312018 | H1001      |   001 |           |             | LISFName        | A                   | LISLName       |        10021970 | M            |   7C01PT54 AVE |                |                 | ALCOVE      | NY           |      12007 |   9735551212 |                    | 7C77C01AE03 |                | PO BOX 100001   |                 |                 | ALCOVE      | NY           |      12007 |      01012017 |      01012017 |                  |                |                       |                 |               |               |                   |                 |          |              |                 |               | GEORGE WASHINGTON |          100 MAIN ST | CHICAGO           | IL                 |            60601 |         9735551212 |                           |          | NO   | NO            | NO         |                      |                    |       1 |            |                | N         |               050 |                  |                 |                  4 |             |               |              |                  |               2019 | LISID001 | MEDPLUSS    | MED1           | MED1        | a             |      01012019 |              61 |            12312018 | Yes                |               0 | AEP          |                |               |                 |                   |                      | MEDPLUS0          | HPNPLISC           | VISION1          | D9870099D9870099D987 | No       |                         |                         |                 |               |                  |                     |                 | MEMPLAN1 | MEMPLAN2 | MEMPLAN3 | MEMPLAN4 | MEMPLAN5 | MEMPLAN6 | MEMPLAN7 | MEMPLAN8 | MEMPLAN9 | MEMPLAN10 |           |          |           |               |             | TRANPLAN1       | TRANPLAN2       | TRANPLAN3       | TRANPLAN4       | TRANPLAN5       | TRANPLAN6       | TRANPLAN7       | TRANPLAN8       | TRANPLAN9       | TRANPLAN10       | RXID        |           01012019 |      04302019 |          |                 |                |                         |                         |                     |                        |                         |                   |                    |                           |                             |                      |                      |             |              |        |              |             |               1 | D                       |         |       |       |                 |   12042016 |                       |        01012017 |              |               |                |              |              |                 |                             |                       |                  |             |            |            |           |              |              |               |               |               |               |               |               |               |               |               |               |               |
      |                    |   12312022 | H1001      |   001 |           |             | LISFName        | A                   | LISLName       |        10021970 | M            |   7C01PT54 AVE |                |                 | ALCOVE      | NY           |      12007 |   9735551212 |                    | 7C77C01AE03 |                | PO BOX 100001   |                 |                 | ALCOVE      | NY           |      12007 |      01012017 |      01012017 |                  |                |                       |                 |               |               |                   |                 |          |              |                 |               | GEORGE WASHINGTON |          100 MAIN ST | CHICAGO           | IL                 |            60601 |         9735551212 |                           |          | NO   | NO            | NO         |                      |                    |       1 |            |                | N         |               050 |                  |                 |                  4 |             |               |              |                  |               2019 | LISID001 | MEDPLUSS    | MED1           | MED1        | a             |      01012019 |              61 |            12312018 | Yes                |               0 | AEP          |                |               |                 |                   |                      | MEDPLUS0          | HPNPLISC           | VISION1          | D9870099D9870099D987 | No       |                         |                         |                 |               |                  |                     |                 | MEMPLAN1 | MEMPLAN2 | MEMPLAN3 | MEMPLAN4 | MEMPLAN5 | MEMPLAN6 | MEMPLAN7 | MEMPLAN8 | MEMPLAN9 | MEMPLAN10 |           |          |           |               |             | TRANPLAN1       | TRANPLAN2       | TRANPLAN3       | TRANPLAN4       | TRANPLAN5       | TRANPLAN6       | TRANPLAN7       | TRANPLAN8       | TRANPLAN9       | TRANPLAN10       | RXID        |           01012019 |      04302019 |          |                 |                |                         |                         |                     |                        |                         |                   |                    |                           |                             |                      |                      |             |              |        |              |             |               1 | D                       |         |       |       |                 |   12042016 |                       |        01012017 |              |               |                |              |              |                 |                             |                       |                  |             |            |            |           |              |              |               |               |               |               |               |               |               |               |               |               |               |
      |                    |   12312023 | H1001      |   001 |           |             | LISFName        | A                   | LISLName       |        10021970 | M            |   7C01PT54 AVE |                |                 | ALCOVE      | NY           |      12007 |   9735551212 |                    | 7C77C01AE03 |                | PO BOX 100001   |                 |                 | ALCOVE      | NY           |      12007 |      01012017 |      01012017 |                  |                |                       |                 |               |               |                   |                 |          |              |                 |               | GEORGE WASHINGTON |          100 MAIN ST | CHICAGO           | IL                 |            60601 |         9735551212 |                           |          | NO   | NO            | NO         |                      |                    |       1 |            |                | N         |               050 |                  |                 |                  4 |             |               |              |                  |               2019 | LISID001 | MEDPLUSS    | MED1           | MED1        | a             |      01012019 |              61 |            12312018 | Yes                |               0 | AEP          |                |               |                 |                   |                      | MEDPLUS0          | HPNPLISC           | VISION1          | D9870099D9870099D987 | No       |                         |                         |                 |               |                  |                     |                 | MEMPLAN1 | MEMPLAN2 | MEMPLAN3 | MEMPLAN4 | MEMPLAN5 | MEMPLAN6 | MEMPLAN7 | MEMPLAN8 | MEMPLAN9 | MEMPLAN10 |           |          |           |               |             | TRANPLAN1       | TRANPLAN2       | TRANPLAN3       | TRANPLAN4       | TRANPLAN5       | TRANPLAN6       | TRANPLAN7       | TRANPLAN8       | TRANPLAN9       | TRANPLAN10       | RXID        |           01012019 |      04302019 |          |                 |                |                         |                         |                     |                        |                         |                   |                    |                           |                             |                      |                      |             |              |        |              |             |               1 | D                       |         |       |       |                 |   12042016 |                       |        01012017 |              |               |                |              |              |                 |                             |                       |                  |             |            |            |           |              |              |               |               |               |               |               |               |               |               |               |               |               |
      |                    |   12312024 | H1001      |   001 |           |             | LISFName        | A                   | LISLName       |        10021970 | M            |   7C01PT54 AVE |                |                 | ALCOVE      | NY           |      12007 |   9735551212 |                    | 7C77C01AE03 |                | PO BOX 100001   |                 |                 | ALCOVE      | NY           |      12007 |      01012017 |      01012017 |                  |                |                       |                 |               |               |                   |                 |          |              |                 |               | GEORGE WASHINGTON |          100 MAIN ST | CHICAGO           | IL                 |            60601 |         9735551212 |                           |          | NO   | NO            | NO         |                      |                    |       1 |            |                | N         |               050 |                  |                 |                  4 |             |               |              |                  |               2019 | LISID001 | MEDPLUSS    | MED1           | MED1        | a             |      01012019 |              61 |            12312018 | Yes                |               0 | AEP          |                |               |                 |                   |                      | MEDPLUS0          | HPNPLISC           | VISION1          | D9870099D9870099D987 | No       |                         |                         |                 |               |                  |                     |                 | MEMPLAN1 | MEMPLAN2 | MEMPLAN3 | MEMPLAN4 | MEMPLAN5 | MEMPLAN6 | MEMPLAN7 | MEMPLAN8 | MEMPLAN9 | MEMPLAN10 |           |          |           |               |             | TRANPLAN1       | TRANPLAN2       | TRANPLAN3       | TRANPLAN4       | TRANPLAN5       | TRANPLAN6       | TRANPLAN7       | TRANPLAN8       | TRANPLAN9       | TRANPLAN10       | RXID        |           01012019 |      04302019 |          |                 |                |                         |                         |                     |                        |                         |                   |                    |                           |                             |                      |                      |             |              |        |              |             |               1 | D                       |         |       |       |                 |   12042016 |                       |        01012017 |              |               |                |              |              |                 |                             |                       |                  |             |            |            |           |              |              |               |               |               |               |               |               |               |               |               |               |               |
