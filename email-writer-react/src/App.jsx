import { use, useState } from 'react'
import './App.css'
import { Box, Container, FormControl, Input, InputLabel, TextField, Typography, MenuItem, Select, Button, CircularProgress } from '@mui/material';
import axios from 'axios';



function App() {

  const [emailContent, setEmailContent] = useState('');
  const [tone , setTone] = useState('');
  const [generatedReply, setGeneratedReply] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.post("http://localhost:8080/api/email/generate" , {
        emailContent,
        tone
      });
      setGeneratedReply(typeof response.data === 'string' ? response.data : JSON.stringify(response.data.reply));
    } catch (error) {
      setError('Failed to generate reply. Please try again.');
      console.error(error);
    }finally{
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="mb" sx = {{ py: 4 }}>
      <Typography variant ='h3' component = {'h1'} gutterBottom>
        Original Email Content
      </Typography>
      <Box sx={{ mx:3 }}>
        <TextField
          fullWidth
          multiline
          minRows = {6}
          variant = 'outlined'
          label = 'Original Email Content'
          value={emailContent || ''}
          onChange={(e) => setEmailContent(e.target.value)}
          sx={{ mb:2 }}
        />
        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel>Tone(Optional)</InputLabel>
          <Select
            value={tone || ''}
            label="Tone(Optional)"
            onChange={(e) => setTone(e.target.value)}>
            <MenuItem value={''}>None</MenuItem>
            <MenuItem value={'Professional'}>Professional</MenuItem>
            <MenuItem value={'Casual'}>Casual</MenuItem>
            <MenuItem value={'Friendly'}>Friendly</MenuItem>
            <MenuItem value={'Enthusiastic'}>Enthusiastic</MenuItem>
            <MenuItem value={'Assertive'}>Assertive</MenuItem>
            <MenuItem value={'Apologetic'}>Apologetic</MenuItem>
            <MenuItem value={'Sympathetic'}>Sympathetic</MenuItem>
            <MenuItem value={'Respectful'}>Respectful</MenuItem>
            <MenuItem value={'Confident'}>Confident</MenuItem>
            <MenuItem value={'Formal'}>Formal</MenuItem>
            <MenuItem value={'Informal'}>Informal</MenuItem>
            <MenuItem value={'Optimistic'}>Optimistic</MenuItem>
            <MenuItem value={'Pessimistic'}>Pessimistic</MenuItem>
            <MenuItem value={'Humorous'}>Humorous</MenuItem>
            <MenuItem value={'Serious'}>Serious</MenuItem>
            <MenuItem value={'Encouraging'}>Encouraging</MenuItem>
            <MenuItem value={'Grateful'}>Grateful</MenuItem>
            <MenuItem value={'Curious'}>Curious</MenuItem>
            <MenuItem value={'Skeptical'}>Skeptical</MenuItem>
            <MenuItem value={'Tactful'}>Tactful</MenuItem>
            <MenuItem value={'Direct'}>Direct</MenuItem>
            <MenuItem value={'Diplomatic'}>Diplomatic</MenuItem>
            <MenuItem value={'Supportive'}>Supportive</MenuItem>
            <MenuItem value={'Encouraging'}>Encouraging</MenuItem>
            <MenuItem value={'Motivational'}>Motivational</MenuItem>
            <MenuItem value={'Inspirational'}>Inspirational</MenuItem>
            <MenuItem value={'Nostalgic'}>Nostalgic</MenuItem>
            <MenuItem value={'Romantic'}>Romantic</MenuItem>
            <MenuItem value={'Playful'}>Playful</MenuItem>
            <MenuItem value={'Sarcastic'}>Sarcastic</MenuItem>
            <MenuItem value={'Witty'}>Witty</MenuItem>
            <MenuItem value={'Cautious'}>Cautious</MenuItem>
            <MenuItem value={'Adventurous'}>Adventurous</MenuItem>
            <MenuItem value={'Bold'}>Bold</MenuItem>
          </Select>
        </FormControl>
        <Button
          variant = 'contained'
          color = 'primary'
          onClick={handleSubmit}
          disabled = {!emailContent || loading}>
          {loading ? <CircularProgress size={24} /> : 'Generate Reply'}
        </Button>
      </Box>
      
      {error && (
        <Typography color="error" sx={{ mb: 2 }}>
          {error}
        </Typography>
      )}
      
      {generatedReply && (
        <Box sx={{ mt: 3 }}>
          <Typography variant="h6" gutterBottom>
            Generated Reply
          </Typography>
          <TextField
            fullWidth
            multiline
            rows={6}
            variant="outlined"
            value={generatedReply || ''}
            inputProps={{
              readOnly: true,
            }}
          />

        <Button
          variant="outlined"
          sx={{ mt: 2 }}
          onClick={() => navigator.clipboard.writeText(generatedReply)}
        >
          Copy to Clipboard
        </Button>
      </Box>
    )}
  </Container>
)
}

export default App
