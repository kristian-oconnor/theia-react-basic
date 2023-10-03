import { Button, Paper, TextField, Typography } from '@mui/material';
import { useState } from 'react';

const Asker = (props: {
    displayMessage: Function,
}) => {

    const [colour, setColour] = useState('');
    return (
        <div id='widget-container'>
            <Paper elevation={12} sx={{ width: '50%', maxWidth: '300px', margin: '30px', padding: '5px', backgroundColor: 'lightblue' }}>
                <Typography variant='h3'>Whats your favourite colour?</Typography>
                <TextField id="ask-colour-question" label="Colour" variant="standard" value={colour} onChange={(e) => {
                    setColour(e.target.value)
                }} />
                <br />
                <Button variant="outlined" onClick={(e) => {
                    e.preventDefault()
                    colour === 'blue' ? props.displayMessage(`Well thats my favourite too, were you tricked by the paper colour?`) : props.displayMessage(`${colour} is also nice, but mine is blue`);
                }}>Display Message</Button>
            </Paper>
        </div>
    );

}

export default Asker;