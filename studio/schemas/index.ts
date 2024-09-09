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
    irfanTeamPage

]
