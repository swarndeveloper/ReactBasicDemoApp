import { useState } from 'react';
import { EXAMPLES } from '../../data.js';
import TabButton from './TabButton.jsx';
import Sections from './Sections.jsx';
import Tabs from './Tabs.jsx';

function Examples() {
    const [selectedTopic, setSelectedTopic] = useState('Please select a tab');
    const handleSelect = (selectedTab) => {
        setSelectedTopic(selectedTab);
    };
    const tabContent =  (<div id="tab-content">
            <h3>{EXAMPLES[selectedTopic]?.title || 'Select a topic'}</h3>
            <p>
                {EXAMPLES[selectedTopic]?.description || 'Please select a topic to see the example code.'}
            </p>
            <code>
                {EXAMPLES[selectedTopic]?.code || ''}
            </code>
        </div>);
    return (
        <Sections id="examples" title="Examples">
            <Tabs ButtonContainer = "menu" buttons={<>
                <TabButton isSelected={selectedTopic === 'jsx'} onClick={() => handleSelect('jsx')}> JSX </TabButton>
                <TabButton isSelected={selectedTopic === 'props'} onClick={() => handleSelect('props')}> Props </TabButton>
                <TabButton isSelected={selectedTopic === 'state'} onClick={() => handleSelect('state')}> State </TabButton>
                <TabButton isSelected={selectedTopic === 'components'} onClick={() => handleSelect('components')}> Components </TabButton>
                </>}>
            </Tabs>
            {tabContent}
        </Sections>
    );
}

export default Examples;
