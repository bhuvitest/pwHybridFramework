export const selectors = {
  // Login page
  username: '#username',
  password: '#password',
  loginBtn:'decorativeSubmit',

  // Post-login navigation
  crmsfaLink: "a:has-text('CRM/SFA')",

  // Common form actions
  submitBtn: "input[name='submitButton']",
  searchBtn: "input[value='Find']",

  // Success / verification
  successMessage: '.successMessage',
  sectionHeader: '.sectionHeaderTitle, .subSectionHeader',
  leadButton :   "a:text('Leads')",
  createLeadButton:"a:text('Create Lead')",
  editLeadButton:"a:text('Edit')",
  findLeadButton:"a:text('Find Leads')",
  deleteLeadButton:"a:text('Delete')",
  mergeLeadButton:"a:text('Merge Leads')",
  
  // Lead form (createLeadForm)
  leads: {
    firstNameInput: '#createLeadForm_firstName',
    lastNameInput: '#createLeadForm_lastName',
    companyInput: '#createLeadForm_companyName',
    creatLeadSaveBtn:'.smallSubmit',
    phoneAreaCode: '#createLeadForm_primaryPhoneAreaCode',
    phoneNumber: '#createLeadForm_primaryPhoneNumber',
    emailInput: '#createLeadForm_primaryEmail',
    sourceDropdown: '#createLeadForm_dataSourceId',
    descriptionInput: '#createLeadForm_description',
    // Find leads form
    searchFirstName: "input[name='firstName']",
    searchLastName: "input[name='lastName']",
    searchBtn: "input[value='Find']",
    resultRow: (name: string) => `//a[contains(text(),'${name}')]`,
    verificationText: '#viewLead_firstName_sp',
  },

  // Account form
  accounts: {
    nameInput: '#accountName',
    phoneAreaCode: '#primaryPhoneAreaCode',
    phoneNumber: '#primaryPhoneNumber',
    emailInput: '#primaryEmail',
    websiteInput: '#primaryWebUrl',
    descriptionInput: "textarea[name='description']",
    saveBtn: "input[value='Create Account']",
    searchName: "input[name='accountName']",
    searchBtn: "input[value='Find']",
    resultRow: (name: string) => `//a[contains(text(),'${name}')]`,
    verificationText: '.subSectionHeader, .sectionHeaderTitle, h1',
  },

  // Contact form
  contacts: {
    firstNameInput: '#firstNameField',
    lastNameInput: '#lastNameField',
    phoneAreaCode: '#createContactForm_primaryPhoneAreaCode',
    phoneNumber: '#createContactForm_primaryPhoneNumber',
    emailInput: '#createContactForm_primaryEmail',
    descriptionInput: '#createContactForm_description',
    searchFirstName: "input[name='firstName']",
    searchLastName: "input[name='lastName']",
    searchBtn: "input[value='Find']",
    resultRow: (name: string) => `//a[contains(text(),'${name}')]`,
    verificationText: '.subSectionHeader, .sectionHeaderTitle, h1',
  },

  // Opportunity form
  opportunities: {
    nameInput: '#createOpportunityForm_opportunityName',
    stageDropdown: '#createOpportunityForm_opportunityStageId',
    amountInput: '#createOpportunityForm_estimatedAmount',
    closeDateInput: '#createOpportunityForm_estimatedCloseDate',
    descriptionInput: '#createOpportunityForm_description',
    saveBtn: "input[name='submitButton']",
    searchName: "input[name='opportunityName']",
    searchBtn: "input[value='Find']",
    resultRow: (name: string) => `//a[contains(text(),'${name}')]`,
    verificationText: '.subSectionHeader, .sectionHeaderTitle, h1',
  },
};
