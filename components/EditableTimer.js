import React from 'react';

import TimerForm from './TimerForm';
import Timer from './Timer';

export default function EditableTimer({
  id,
  title,
  project,
  elapsed,
  isRunning,
  editFormOpen
}) {
  if (editFormOpen) {
    return <TimerForm id={id} title={title} project={project} />;
  } else {
    return (
      <Timer
        id={id}
        title={title}
        project={project}
        elapsed={elapsed}
        isRunning={isRunning}
      />
    );
  }
}
