import React from 'react';
import {Modal, View, Text} from 'react-native';
import Button from './Button';

const CustomModal = ({visible, onClose, children}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <View className="bg-slate-400 mx-auto  rounded-lg h-36 w-3/4 my-auto">
        {children}
        <View>
          <Button title="Close" onPressHandler={onClose} />
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;
