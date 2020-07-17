export class AuthModel {
  public constructor(
    public userID?: 0,
    public identification?: Number,
    public username_email?: String,
    public firstName?: String,
    public lastName?: String,
    public password?: String,
    public city?: String,
    public street?: String,
    public role?: String,
    public visitCounter?: String
  ) {}
}

export class RegAuthModel extends AuthModel {
  public constructor(
    public userID?: 0,
    public identification?: Number,
    public username_email?: String,
    public firstName?: String,
    public lastName?: String,
    public password?: String,
    public city?: String,
    public street?: String,
    public conf_password?: String
  ) {
    super(
      userID,
      identification,
      username_email,
      firstName,
      lastName,
      password,
      city,
      street
    );
  }
}
