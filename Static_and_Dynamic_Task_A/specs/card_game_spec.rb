require("minitest/autorun")
require("minitest/rg")
require_relative("../card_game.rb")

class CardGameTest < MiniTest::Test

  def setup
    @game = CardGame.new
    @ace_of_spades = Card.new("Spades", 1)
    @two_of_hearts = Card.new("Hearts", 2)
    @cards = [@ace_of_spades, @two_of_hearts]
  end

  def test_checks_for_ace__ace_passed_in
    assert(@game.check_for_ace(@ace_of_spades))
  end

  def test_checks_for_ace__not_ace_passed_in
    refute(@game.check_for_ace(@two_of_hearts))
  end

  def test_can_find_highest_card__first_card_highest
    assert_equal(@two_of_hearts, @game.highest_card(@ace_of_spades, @two_of_hearts))
  end

  def test_can_find_highest_card__second_card_highest
    assert_equal(@two_of_hearts, @game.highest_card(@two_of_hearts, @ace_of_spades))
  end

  def test_can_find_highest_card__equal_values
    assert_equal("Cards are of equal value.", @game.highest_card(@ace_of_spades, @ace_of_spades))
  end

  def test_can_get_total_value
    assert_equal("You have a total of 3", @game.cards_total(@cards))
  end

end
