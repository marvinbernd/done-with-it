import React, { useState } from 'react';
import { FlatList } from 'react-native';

import ListItem from '../components/lists/ListItem';
import Screen from '../components/Screen';
import ListItemSeparator from '../components/lists/ListItemSeparator';
import ListItemDeleteAction from '../components/lists/ListItemDeleteAction';

const initialMessages = [
  {
    id: 1,
    title: 'T1',
    description: 'D1',
    image: require('../assets/mosh.jpg'),
  },
  {
    id: 2,
    title: 'T2',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus convallis metus eu ornare. Phasellus in pretium nunc. Mauris ullamcorper ex vitae interdum imperdiet. In auctor et nisl vel sodales. Morbi aliquet ante interdum purus gravida, nec posuere dui dapibus. Nullam gravida, elit nec pretium aliquam, est enim semper nunc, nec tempor metus quam eget tortor. Mauris est lacus, egestas finibus neque eget, sodales posuere odio. Maecenas vehicula enim enim, quis placerat arcu venenatis vitae.',
    image: require('../assets/mosh.jpg'),
  },
];

function MessageScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            showChevron
            onPress={() => console.log('Message selected', item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: 'T2',
              description: 'D2',
              image: require('../assets/mosh.jpg'),
            },
          ]);
        }}
      />
    </Screen>
  );
}

export default MessageScreen;
