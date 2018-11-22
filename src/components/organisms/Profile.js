import { connect } from "react-redux";
import React, { Component } from "react";
import { updateUser } from "../../actions/UserActions";
import AvatarEditor from "react-avatar-editor";
import Dropzone from "react-dropzone";
import Button from "../atoms/Button";
import TextInput from "../atoms/TextInput";
import Text from "../atoms/Text";
import Form from "../molecules/Form";
import LabeledInput from "../molecules/LabeledInput";
import palette from "../../theme/palette";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "",
      name: "",
      email: "",
      password: ""
    };
  }

  handleNameChange = e => {
    this.setState({ name: e.target.value });
  };

  handleEmailChange = e => {
    this.setState({ email: e.target.value });
  };

  handlePasswordChange = e => {
    this.setState({ password: e.target.value });
  };

  handleDrop = dropped => {
    this.setState({ image: dropped[0] });
  }

  submit = e => {
    e.preventDefault();
    const canvas = this.editor.getImageScaledToCanvas();
    canvas.toBlob(blob => this.props.dispatch(
      updateUser(
        blob,
        this.state.name,
        this.state.email,
        this.state.password
      )
    ));
  }

  setEditorRef = (editor) => this.editor = editor

  render () {
    const { image, name, email, password } = this.state;
    return (
      <>
        <Form
          onSubmit={this.submit}
          render={() => (
            <>
              <LabeledInput
                name="email"
                label={() => (
                  <Text size="S" margin="0.5rem 0 0 26px">
                    メールアドレス
                  </Text>
                )}
                input={() => (
                  <TextInput
                    placeholder="メールアドレス"
                    handleChange={this.handleEmailChange}
                    name="email"
                    value={email}
                    required
                  />
                )}
                value={email}
              />
              <LabeledInput
                name="name"
                label={() => (
                  <Text size="S" margin="0.5rem 0 0 26px">
                    名前
                  </Text>
                )}
                input={() => (
                  <TextInput
                    placeholder="名前"
                    handleChange={this.handleNameChange}
                    name="name"
                    value={name}
                    required
                  />
                )}
                value={email}
              />
              <LabeledInput
                name="password"
                label={() => (
                  <Text size="S" margin="0.5rem 0 0 26px">
                    パスワード
                  </Text>
                )}
                input={() => (
                  <TextInput
                    type="password"
                    placeholder="パスワード"
                    handleChange={this.handlePasswordChange}
                    name="password"
                    value={password}
                    required
                  />
                )}
                value={password}
              />

              <Dropzone
                onDrop={this.handleDrop}
                disableClick
                style={{ width: "250px", height: "250px" }}
              >
                <AvatarEditor
                  ref={this.setEditorRef}
                  image={image}
                  width={250}
                  height={250}
                  border={50}
                  scale={1.2}
                />
              </Dropzone>

              <Button mode="Primary" type="submit">
                <Text fontWeight={"bold"} color={palette["White00"]}>
                  送信
                </Text>
              </Button>
            </>
          )}
        />
      </>
    );
  }
}

export default connect(_ => ({
}))(Profile);

