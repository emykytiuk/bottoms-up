require "test_helper"

class BreweriesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @brewery = breweries(:one)
  end

  test "should get index" do
    get breweries_url, as: :json
    assert_response :success
  end

  test "should create brewery" do
    assert_difference("Brewery.count") do
      post breweries_url, params: { brewery: { city: @brewery.city, name: @brewery.name } }, as: :json
    end

    assert_response :created
  end

  test "should show brewery" do
    get brewery_url(@brewery), as: :json
    assert_response :success
  end

  test "should update brewery" do
    patch brewery_url(@brewery), params: { brewery: { city: @brewery.city, name: @brewery.name } }, as: :json
    assert_response :success
  end

  test "should destroy brewery" do
    assert_difference("Brewery.count", -1) do
      delete brewery_url(@brewery), as: :json
    end

    assert_response :no_content
  end
end
