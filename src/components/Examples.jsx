import { EXAMPLES } from '../data';
import { useState } from 'react';
import Section from './Section';
import Tabs from './Tabs';
import TabButton from './TabButton';

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleClick(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  let tabContent = <p>Please select a topic.</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <Section title="Examples" id="examples">
      <Tabs
        //   here's how we use built in components eg. <menu></menu> or {Section} the created component we have
        buttonsContainer="menu"
        buttons={
          /*   <>
              <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleClick('components')}>
                Components
               </TabButton>
               <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleClick('jsx')}>
                JSX
               </TabButton>
              <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleClick('props')}>
                Props
              </TabButton>
             <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleClick('state')}>
                 State
               </TabButton>
             </>  */

          //  SEE COMMENT ON LINE 67
          Object.keys(EXAMPLES).map((key) => (
            <TabButton
              key={key}
              isSelected={selectedTopic === key} // Compare selectedTopic with the key
              onSelect={() => handleClick(key)} // Update selectedTopic with the key
            >
              {EXAMPLES[key].title} {/* Use the title from EXAMPLES */}
            </TabButton>
          ))
        }
      ></Tabs>
      {tabContent}
    </Section>
  );
}

/* Previously, we manually wrote out each <TabButton> for 'components', 'jsx', 'props', and 'state'.
Now, we dynamically generate them using Object.keys(EXAMPLES), making the code more scalable.
This means if we add more topics to EXAMPLES in data.js, they will automatically appear as tabs. */
