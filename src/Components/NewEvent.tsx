import { Button, Checkbox, Container, FormControlLabel, Input, InputLabel, MenuItem, Select, TextField} from '@material-ui/core';
import { Assignment } from '@mui/icons-material';
import { Autocomplete } from '@mui/material';

import React from 'react';

const NewEvent = () => {
    const subject = [
        {id: 1, name: 'PROG2'},
        {id: 2, name: 'SYS2'},
        {id: 3, name: 'EL1'},
    ]
    return(
        <>
            <Container className='container'>                     
                <h4 className='container-title'><i><Assignment/></i> Nouvel evenement</h4>
                <hr/>
                <div className="event-time">
                    <div>
                        <InputLabel>Date:</InputLabel>
                        <Input type='date'/>
                    </div>
                    <div>
                        <InputLabel>Heure de debut:</InputLabel>
                        <Input type='time'/>
                    </div>
                    <div>
                        <InputLabel>Heure de fin:</InputLabel>
                        <Input type='time'/>
                    </div>
                </div>

                <div className="event-description">
                    <div>
                        <InputLabel>Type d'evenement:</InputLabel>
                        <Select variant='standard'>
                            <MenuItem value="cours" >Cours</MenuItem>
                            <MenuItem value="autre">Autre</MenuItem>
                        </Select>
                    </div>
                    <div>
                        <InputLabel>Lieu:</InputLabel>
                        <Input/>
                    </div>
                    <div>
                        <InputLabel>Nom de l'evenement:</InputLabel>
                        <Autocomplete
                            id="courses"
                            options={subject}
                            renderInput = {
                                params => (
                                    <TextField
                                        {...params}
                                        label="courses"
                                    />
                                )
                            }
                            getOptionLabel={option => option.name}
                        />

                    </div>    
                </div>

                <div className='event-participant'>
                    <InputLabel>Groupe:</InputLabel>
                    <div className='event-participant-form'>
                        <FormControlLabel control={<Checkbox />} label="G1" className='checkbox'/>
                        <FormControlLabel control={<Checkbox />} label="G2" className='checkbox'/>
                        <FormControlLabel control={<Checkbox />} label="G3" className='checkbox'/>
                    </div>
                </div>

                <Button variant='contained' color='primary' className='presence-button'>Faire presence</Button>
                <Button variant='contained' color='secondary' className='exit-button'>Annuler</Button>
            </Container> 
        </>
    );
}

export default NewEvent;
