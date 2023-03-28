require "rails_helper"

describe Types::QueryType do
  query_string = <<-GRAPHQL
    query {
      beers {
        id
        name
      }
    }
  GRAPHQL

  context "when beers query is called" do
    let(:result) do
      result =
        BottomsUpSchema.execute(
          query_string,
        )
      result["data"]["beers"]
    end

    it "should return a value" do
      expect(result[0]["id"]).not_to be_nil
    end

    it "should return all beers" do
      expect(result.count).to be 2
    end

  end
end
