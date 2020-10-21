require 'test_helper'

class S3ControllerTest < ActionDispatch::IntegrationTest
  test "should get direct_post" do
    get s3_direct_post_url
    assert_response :success
  end

end
