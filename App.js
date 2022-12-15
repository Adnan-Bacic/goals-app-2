import { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([])
  const [modalIsVisible, setmModalIsVisible] = useState(false)

  const addGoalHandler = (enteredGoalText) => {
    //console.log(enteredGoalText)
    setCourseGoals(currentCourseGoals => {
      return [
        ...currentCourseGoals,
        {
          text: enteredGoalText,
          id: Math.random().toString()
        }
      ]
    }
    )
    endAddGoal()
  }

  const deleteGoalHandler = (id) => {
    console.log('delete')
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => {
        return goal.id !== id
      })

    })
  }

  const startAddGoal = () => {
    setmModalIsVisible(true)
  }

  const endAddGoal = () => {
    setmModalIsVisible(false)
  }

  return (
    <>
      <StatusBar style='light'></StatusBar>
      <View style={styles.container}>
        {/* 
      <ScrollView>
        <Text>List of goals</Text>
        {courseGoals.map((goal) => {
          return(
            <View key={goal} style={styles.goalItem}>
              <Text style={styles.goalText}>{goal}</Text>
            </View>
          )
        })}
      </ScrollView>
      */}

        <Button title="add new goal" color="#a065ec" onPress={startAddGoal}></Button>
        <GoalInput
          onAddGoal={addGoalHandler}
          visible={modalIsVisible}
          onCancel={endAddGoal}
        ></GoalInput>
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteItem={deleteGoalHandler}
                ></GoalItem>
              )
            }}
            keyExtractor={(item) => {
              return item.id
            }}
          >
          </FlatList>
        </View>
      </View>
    </>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
});
