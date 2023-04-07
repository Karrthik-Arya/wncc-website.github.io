# -*- encoding: utf-8 -*-
# stub: unicode-display_width 2.3.0 ruby lib

Gem::Specification.new do |s|
  s.name = "unicode-display_width".freeze
  s.version = "2.3.0"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.metadata = { "bug_tracker_uri" => "https://github.com/janlelis/unicode-display_width/issues", "changelog_uri" => "https://github.com/janlelis/unicode-display_width/blob/master/CHANGELOG.md", "rubygems_mfa_required" => "true", "source_code_uri" => "https://github.com/janlelis/unicode-display_width" } if s.respond_to? :metadata=
  s.require_paths = ["lib".freeze]
  s.authors = ["Jan Lelis".freeze]
  s.date = "2022-09-14"
  s.description = "[Unicode 15.0.0] Determines the monospace display width of a string using EastAsianWidth.txt, Unicode general category, and other data.".freeze
  s.email = ["hi@ruby.consulting".freeze]
  s.extra_rdoc_files = ["README.md".freeze, "MIT-LICENSE.txt".freeze, "CHANGELOG.md".freeze]
  s.files = ["CHANGELOG.md".freeze, "MIT-LICENSE.txt".freeze, "README.md".freeze]
  s.homepage = "https://github.com/janlelis/unicode-display_width".freeze
  s.licenses = ["MIT".freeze]
  s.required_ruby_version = Gem::Requirement.new(">= 1.9.3".freeze)
  s.rubygems_version = "3.4.6".freeze
  s.summary = "Determines the monospace display width of a string in Ruby.".freeze

  s.installed_by_version = "3.4.6" if s.respond_to? :installed_by_version

  s.specification_version = 4

  s.add_development_dependency(%q<rspec>.freeze, ["~> 3.4"])
  s.add_development_dependency(%q<rake>.freeze, ["~> 13.0"])
end
