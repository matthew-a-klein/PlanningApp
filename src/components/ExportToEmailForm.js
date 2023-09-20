import {View, TextInput} from 'react-native';
import Button from './Button';
import {useState} from 'react';

const ExportToEmailForm = ({onClose, exportFunction}) => {
  const [emailAddress, setEmailAddress] = useState('');
  const handleSend = () => {
    exportFunction(emailAddress);
    onClose();
  };
  return (
    <View>
      <TextInput
        placeholderTextColor={'black'}
        value={emailAddress}
        placeholder="Email Address"
        onChangeText={text => setEmailAddress(text)}
        className="bg-white text-black m-2 rounded-md text-lg"
      />
      <Button title="Send" onPressHandler={handleSend} />
    </View>
  );
};

export default ExportToEmailForm;
