import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from "@mui/x-date-pickers";
import enGB from 'date-fns/locale/en-GB';
import { Layout } from "components/layout";
import { Notes, Note, EditNote, NewNote } from "components/notes";
import { EditTask, NewTask, Task, Tasks } from "./components/tasks";

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={enGB}>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="notes/new" element={<NewNote/>}/>
              <Route path="notes/:noteId" element={<Note/>}/>
              <Route path="notes/edit/:noteId/" element={<EditNote/>}/>
              <Route path="notes" element={<Notes/>}/>
              <Route path="tasks/new" element={<NewTask/>}/>
              <Route path="tasks/:taskId" element={<Task/>}/>
              <Route path="tasks/edit/:taskId/" element={<EditTask/>}/>
              <Route path="tasks" element={<Tasks/>}/>
            </Route>
          </Routes>
      </BrowserRouter>
    </LocalizationProvider>
  );
}

export default App;
