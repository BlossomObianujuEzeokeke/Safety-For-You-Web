import blockContent from './blockContent'
import post from './post'
import team from './team'
import trainersProfile from './trainersProfile'
import training from './training'

// Trainers Profiles Pages
import alexObiora from './trainersPages/alexObioraPage'
import kamsyMadueke from './trainersPages/kamsyMadueke'
import nwaobiAnthonyPage from './trainersPages/nwaobiAnthonyPage'
import nnodiReginaldPage from './trainersPages/nnodiReginaldPage'
import princeWillPage from './trainersPages/princeWillPage'

// Trainings Pages
import journeyManagementTraining from './traningsPages/journey-management-training'
import hygieneAndSanitationTraining from './traningsPages/hygiene-and-sanitation-training'
import emergencyResponseTraining from './traningsPages/emergency-response-training'
import securityTraining from './traningsPages/security-training'
import genderBasedViolenceTraining from './traningsPages/gender-based-violence-training'
import basicAndAdvancedFirefightingTraining from './traningsPages/basic-and-advanced-firefighting-training'
import campCoordinationManagementTraining from './traningsPages/camp-coordination-management-training'


// Team Members Pages
import alexObioraTeamPage from './teamPages/alexObioraTeamPage'
import kamsyMaduekeTeamPage from './teamPages/kamsyMaduekeTeamPage'
import princewillTeamPage from './teamPages/princewillTeamPage'
import irfanTeamPage from './teamPages/irfanTeamPage'



// Schema
export const schemaTypes = [
    post, 
    blockContent, 
    team, 
    trainersProfile, 
    training,

    alexObiora,
    kamsyMadueke,
    nwaobiAnthonyPage,
    princeWillPage,
    nnodiReginaldPage,

    alexObioraTeamPage,
    kamsyMaduekeTeamPage,
    princewillTeamPage,
    irfanTeamPage,

    journeyManagementTraining,
    hygieneAndSanitationTraining,
    emergencyResponseTraining,
    securityTraining,
    genderBasedViolenceTraining,
    basicAndAdvancedFirefightingTraining,
    campCoordinationManagementTraining

]
