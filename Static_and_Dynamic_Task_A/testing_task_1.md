### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby

# The file doesn't require the Card class, so it won't recognise the .value() method.

class CardGame


  def checkforAce(card) # method name should be 'snake case' ie check_for_ace
    if card.value = 1 # should be == not =
      return true
    else
      return false
    end
  end

  dif highest_card(card1 card2) # dif should be def; should be comma between 'card1' and 'card2'
  if card1.value > card2.value # should be indented
    return card # should read 'card1'
  else
    return card2
  end # this if loop needs logic added to cover equal values
end
end # should be moved to end of file - it is the end of the class definition

def self.cards_total(cards) # remove 'self.' - this isn't a class method
  total # need to set 'total' to initial value (zero)
  for card in cards
    total += card.value
    return "You have a total of" + total # this line should be after the first 'end' statement; need to add space after 'of'; need to convert integer 'total' to string
  end
end

# class end statement should go here
```
