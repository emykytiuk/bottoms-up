require "rails_helper"

RSpec.describe Types::QueryType do
  fixtures :all
  
  query_string = <<-GRAPHQL
    query {
      styles {
        id
        name
      }
    }
  GRAPHQL

  context "when styles query is called" do
    let(:result) do
      result =
        BottomsUpSchema.execute(
          query_string,
        )
      result["data"]["styles"]
    end

    it "should return a value" do
      expect(result[0]["id"]).not_to be_nil
    end

    it "should return all styles" do
      expect(result.count).to be 2
    end

  end
end
