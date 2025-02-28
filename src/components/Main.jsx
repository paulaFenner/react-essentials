import { useState } from 'react';

import { CORE_CONCEPTS, EXAMPLES } from '../data';
import CoreConcept from './CoreConcept';
import TabButton from './TabButton';

export default function Main() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleClick(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  }
  return (
    <main>
      <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          <CoreConcept
            title={CORE_CONCEPTS[0].title}
            description={CORE_CONCEPTS[0].description}
            image={CORE_CONCEPTS[0].image}
          />
          <CoreConcept {...CORE_CONCEPTS[1]} />
          <CoreConcept {...CORE_CONCEPTS[2]} />
          <CoreConcept {...CORE_CONCEPTS[3]} />
        </ul>
      </section>
      <section id="examples">
        <h2>Examples</h2>
        <menu>
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
        </menu>
        {!selectedTopic ? (
          <p>Please select a topic.</p>
        ) : (
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>
        )}
      </section>
    </main>
  );
}
